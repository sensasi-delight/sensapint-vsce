# Sensapint

🚀 **Sensapint** is a Visual Studio Code extension that formats your PHP files using [Laravel Pint](https://laravel.com/docs/pint).
Bring consistent and elegant code style to your PHP projects — right from your editor.

---

## ✨ Features

- 🔧 Format any PHP file directly inside VS Code with **Laravel Pint**.
- ⚡ Supports **Format Document** (`Shift + Alt + F`) and **Format on Save**.
- 🖥 Works seamlessly with Laravel projects, but can be used with any PHP codebase with Composer as package manager.

---

## 📦 Installation

1. Install [Laravel Pint](https://laravel.com/docs/pint) in your project (usually as a dev dependency):

   ```bash
   composer require laravel/pint --dev
   ```

2. Install **Sensapint** from the VS Code Marketplace (or side-load the `.vsix` package if you build locally).

---

## 🖱 Usage

- Open any PHP file.

- Run the command:

  - **Format Document** → `Shift + Alt + F`
  - Or from the Command Palette → `Format Document With...` → **Sensapint**
  - Or manually → `> Format PHP with Pint`

- Optionally, enable auto-format on save:

  ```json
  {
    "editor.formatOnSave": true
  }
  ```

---

## 💡 Example

Before formatting:

```php
<?php class Test {public function foo(){echo "Hello World";}}
```

After formatting with Pint:

```php
<?php

class Test
{
    public function foo()
    {
        echo 'Hello World';
    }
}
```

---

## 🤝 Contributing

Contributions are welcome!
Feel free to open an issue or submit a pull request on [GitHub](https://github.com/sensasi-delight/sensapint-vsce).

---

## 📄 License

[MIT License](LICENSE)
