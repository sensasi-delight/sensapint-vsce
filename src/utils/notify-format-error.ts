import log from "./log";
import { window } from "vscode";

export default function notifyFormatError(error: any) {
  log("error", JSON.stringify(error));
  window.showErrorMessage(`Sensapint failed: ${error.message}`);
}
