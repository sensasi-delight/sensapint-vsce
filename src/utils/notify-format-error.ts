import { window } from "vscode";

export default function notifyFormatError(error: any) {
  window.showErrorMessage(`Sensapint failed: ${error.message}`);
}
