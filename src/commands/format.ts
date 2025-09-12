import { window } from "vscode";
import { formatWithPint } from "../utils/format-with-pint";
import notifyFormatError from "../utils/notify-format-error";
import notifyFormatSuccess from "../utils/notify-format-success";

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

  return formatWithPint(document)
    .then(notifyFormatSuccess)
    .catch(notifyFormatError);
}
