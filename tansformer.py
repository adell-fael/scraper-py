import os
import re

# Folder containing .tsx files
folder_path = "./src/scraped_components"

# Regex to match full `export default function Name() { ... }` block
# This captures everything between the opening brace and the matching closing brace
pattern = re.compile(
    r'export\s+default\s+function\s+\w+\s*\(\s*\)\s*\{([\s\S]*)\}$',
    re.MULTILINE
)

# Walk through all files
for root, _, files in os.walk(folder_path):
    for file in files:
        if file.endswith(".tsx"):
            file_path = os.path.join(root, file)

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            if re.search(pattern, content):
                # Generate component name with zero-padded number
                component_name = f"ComboboxInput"
                
                # Create replacement template with dynamic component name
                replacement = f'const {component_name} = () => {{\\1}}\n\nexport default {component_name};'
                
                new_content = re.sub(pattern, replacement, content)

                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)

                print(f"✅ Updated: {file_path} -> {component_name}")
            else:
                print(f"❌ No match found: {file_path}")