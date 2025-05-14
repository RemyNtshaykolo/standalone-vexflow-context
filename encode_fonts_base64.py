import base64
import os


def encode_font_to_base64(font_path):
    with open(font_path, "rb") as font_file:
        encoded = base64.b64encode(font_file.read()).decode("utf-8")
    return encoded


def generate_js_default_export(base64_data, output_path):
    js_content = f'const base64Font = "{base64_data}";\nexport default base64Font;\n'
    with open(output_path, "w") as f:
        f.write(js_content)


def main():
    font_dir = "fonts"

    fonts = [
        "Petaluma.otf",
        "PetalumaScript.otf",
        "PetalumaText.otf",
    ]

    for filename in fonts:
        font_path = os.path.join(font_dir, filename)
        if not os.path.exists(font_path):
            print(f"⚠️ Fichier non trouvé : {font_path}")
            continue

        base64_data = encode_font_to_base64(font_path)
        output_file = os.path.splitext(font_path)[0] + ".js"  # remplace .otf -> .js
        generate_js_default_export(base64_data, output_file)
        print(f"✅ {filename} encodée → {output_file}")


if __name__ == "__main__":
    main()
