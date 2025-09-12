import * as vscode from "vscode";
import format from "./commands/format";
import documentFormattingEditProvider from "./providers/document-formatting-edit-provider";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("sensapint.format", format)
  );

  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "php",
      documentFormattingEditProvider
    )
  );
}

export function deactivate() {}
