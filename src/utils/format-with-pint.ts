import { exec } from "child_process";
import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export async function formatWithPint(document: vscode.TextDocument) {
  const filePath = document.fileName;

  return new Promise<void>((resolve, reject) => {
    runPint([filePath], document.uri)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
}

function runPint(args: string[], uri: vscode.Uri) {
  return new Promise<void>((resolve, reject) => {
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
    const cwd = workspaceFolder
      ? workspaceFolder.uri.fsPath
      : path.dirname(uri.fsPath);

    let pintPath = path.join(cwd, "vendor", "bin", "pint");

    if (process.platform === "win32") {
      if (fs.existsSync(pintPath + ".bat")) {
        pintPath = pintPath + ".bat";
      } else if (fs.existsSync(pintPath + ".cmd")) {
        pintPath = pintPath + ".cmd";
      }
    }

    if (!fs.existsSync(pintPath)) {
      reject(
        new Error(
          "Laravel Pint is not installed. Run `composer require laravel/pint --dev` in your project."
        )
      );
      return;
    }

    const command = `"${pintPath}" ${args.join(" ")}`;

    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr || error.message));
        return;
      }
      resolve();
    });
  });
}
