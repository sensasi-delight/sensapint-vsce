import * as vscode from "vscode";
import { spawnPint } from "./utils";

export async function formatWithPint(document: vscode.TextDocument) {
  const filePath = document.fileName;

  return new Promise<void>((resolve, reject) => {
    const process = spawnPint([filePath], document.uri);

    let stderr = "";
    process.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(stderr || "Laravel Pint failed to format the file."));
      }
    });
  });
}
