import * as vscode from "vscode";
import { formatWithPint } from "./formatter";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "sensapint.format",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active PHP file to format.");
        return;
      }

      const document = editor.document;
      if (document.languageId !== "php") {
        vscode.window.showErrorMessage("Sensapint only works with PHP files.");
        return;
      }

      try {
        await formatWithPint(document);
        vscode.window.showInformationMessage(
          "File formatted with Laravel Pint 🚀"
        );
      } catch (error: any) {
        vscode.window.showErrorMessage(`Sensapint failed: ${error.message}`);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
