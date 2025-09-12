import { window } from "vscode";
import { formatWithPint } from "../utils/format-with-pint";
import notifyFormatError from "../utils/notify-format-error";

export default async function format() {
  const editor = window.activeTextEditor;
  if (!editor) {
    window.showErrorMessage("No active PHP file to format.");
    return;
  }

  const document = editor.document;
  if (document.languageId !== "php") {
    window.showErrorMessage("Sensapint only works with PHP files.");
    return;
  }

  return formatWithPint(document).catch(notifyFormatError);
}
