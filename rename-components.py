import os

def to_pascal_case(folder_name):
    """Convert folder name from kebab-case to PascalCase"""
    # Split by dash and capitalize each part
    parts = folder_name.split('-')
    return ''.join(word.capitalize() for word in parts)

# Root folder containing multiple subfolders
root_folder = "./src/components"

# Walk through each subfolder
for folder_name in os.listdir(root_folder):
    folder_path = os.path.join(root_folder, folder_name)
    
    # Skip if not a directory
    if not os.path.isdir(folder_path):
        continue
    
    # Convert folder name to PascalCase
    pascal_case_name = to_pascal_case(folder_name)
    
    # Get all .tsx files in the current folder
    tsx_files = [f for f in os.listdir(folder_path) if f.endswith('.tsx')]
    
    if not tsx_files:
        print(f"⚠️  No .tsx files found in folder: {folder_name}")
        continue
    
    print(f"📁 Processing folder: {folder_name} -> {pascal_case_name}")
    
    # Counter for files in this folder
    file_counter = 1
    
    # Process each .tsx file in the folder
    for tsx_file in tsx_files:
        file_path = os.path.join(folder_path, tsx_file)
        
        # Generate the new component name with zero-padded number
        new_component_name = f"{pascal_case_name}"
        
        try:
            # Read the file content
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Replace all occurrences of "MyComponent" with the new name
            if "MyComponent" in content:
                new_content = content.replace("MyComponent", new_component_name)
                
                # Write the updated content back to the file
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                
                print(f"  ✅ Updated component in {tsx_file}: MyComponent -> {new_component_name}")
                file_counter += 1
            else:
                print(f"  ❌ No 'MyComponent' found in: {tsx_file}")
                
        except Exception as e:
            print(f"  ❌ Error processing {tsx_file}: {e}")
    
    print()  # Empty line between folders

print("🎉 All folders processed!")