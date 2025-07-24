import os
from openai import OpenAI
from pathlib import Path
import re

from dotenv import load_dotenv

# Load variables from .env into environment
load_dotenv()

# Now read the key
OPENAI_KEY = os.environ.get('OPENAI_API_KEY', '').strip()

# Initialize client using your API key securely (env var preferred).
client = OpenAI(api_key=OPENAI_KEY)

def refactor_file(path):
    code = open(path, "r").read()
    folderName = os.path.basename(os.path.dirname(path))

    prompt = f"""
You are a Senior Front-End Developer and an Expert in ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS and modern UI/UX frameworks (e.g., TailwindCSS, Shadcn, Radix). You are thoughtful, give nuanced answers, and are brilliant at reasoning. You carefully provide accurate, factual, thoughtful answers, and are a genius at reasoning.

- Follow the user’s requirements carefully & to the letter.
- Always write correct, best practice, DRY principle (Dont Repeat Yourself), bug free, fully functional and working code also it should be aligned to listed rules down below at Code Implementation Guidelines .
- Focus on easy and readability code, over being performant.
- Fully implement all requested functionality.
- Leave NO todo’s, placeholders or missing pieces.
- Ensure code is complete! Verify thoroughly finalised.
- Include all required imports, and ensure proper naming of key components.
- Be concise Minimize any other prose.

### Coding Environment
The user asks questions about the following coding languages:
- ReactJS
- NextJS
- JavaScript
- TypeScript
- TailwindCSS
- HTML
- CSS

### Code Implementation Guidelines
Follow these rules when you write code:
- move the variables and types internally inside the component body before the return 
- rename the component descriptively based on folder/content
- if hero icons exist replace with lucide-react icons alternatives
- convert to arrow function
- optimize for reusability

folder name: {folderName}

code:
{code}
"""

    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a react TS refactoring assistant."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.1
    )
    return resp.choices[0].message.content

def strip_wrapping_backticks(code: str) -> str:
    """
    Extract only the code inside the first Markdown code fence (```tsx, ```ts, ```typescript, ```jsx).
    Remove everything else including backticks and language indicators.
    """
    # Regex to match ```tsx\n<code>\n```
    pattern = r"```(?:tsx|typescript|ts|jsx)\s*\n([\s\S]*?)\n```"
    match = re.search(pattern, code, re.MULTILINE)

    if match:
        return match.group(1).strip()
    
    return code.strip()

# Process all scraped components (including subfolders)
scraped_dir = Path("src/scraped_components")
for path in scraped_dir.rglob("*.tsx"):  # rglob = recursive glob
    new_code = refactor_file(str(path))

    # Remove wrapping ```tsx ... ``` if present
    cleaned_code = strip_wrapping_backticks(new_code)

    with open(path, "w") as f:
        f.write(cleaned_code)

    print(f"Refactored: {path}")


