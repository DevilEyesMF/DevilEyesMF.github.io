import os
import json

# Supported image extensions
IMAGE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.webp'}

def is_image_file(filename):
    return os.path.splitext(filename)[1].lower() in IMAGE_EXTENSIONS

def get_image_structure(path):
    structure = {"images": [], "directories": {}}
    try:
        with os.scandir(path) as entries:
            for entry in entries:
                if entry.is_file() and is_image_file(entry.name):
                    structure["images"].append(entry.name)
                elif entry.is_dir():
                    subdir_structure = get_image_structure(entry.path)
                    structure["directories"][entry.name] = subdir_structure
    except PermissionError:
        pass  # Skip directories that can't be accessed
    return structure

def generate_image_json(root_path, output_file='images.json'):
    structure = get_image_structure(root_path)
    with open(output_file, 'w') as f:
        json.dump(structure, f, indent=2)

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Generate a JSON listing images in a directory tree.")
    parser.add_argument("path", help="Path to the directory to scan")
    parser.add_argument("--output", default="images.json", help="Output JSON file name (default: images.json)")

    args = parser.parse_args()
    generate_image_json(args.path, os.path.join(args.path, args.output))
    print(f"Image JSON written to {args.output}")
    