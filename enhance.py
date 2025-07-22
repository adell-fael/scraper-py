import os, glob
from openai import OpenAI

# Initialize client using your API key securely (env var preferred).
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def refactor_file(path):
    code = open(path, "r").read()

    prompt = f"""
Refactor this React TSX file:
- convert functional component to arrow functional component and rename relative to the content
- replace icons with lucide-react alternative icons
- move any variable inside the component scope
- give the code directly without any explanation or introductions and always give the whole code
- also use the FC instead of React.FC and import from react which is a named export FC

Here is the content:
{code}
"""

    resp = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a react TS refactoring assistant."},
            {"role": "user", "content": prompt}
        ],
        temperature=0
    )
    return resp.choices[0].message.content

def strip_wrapping_backticks(code: str) -> str:
    if code.startswith("```tsx") and code.endswith("```"):
        # Remove the first line ```tsx and the last line ```
        lines = code.splitlines()
        # Remove first line (```tsx) and last line (```)
        return "\n".join(lines[1:-1]).strip()
    return code

# Process all scraped components
for path in glob.glob("src/scraped_components/*.tsx"):
    new_code = refactor_file(path)

    # Remove wrapping ```tsx ... ``` if present
    cleaned_code = strip_wrapping_backticks(new_code)

    with open(path, "w") as f:
        f.write(cleaned_code)

    print(f"Refactored {path}")
