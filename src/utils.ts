import * as vscode from "vscode";
import { spawn } from "child_process";
import * as path from "path";
import * as fs from "fs";

export function spawnPint(args: string[], uri: vscode.Uri) {
  const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
  const cwd = workspaceFolder
    ? workspaceFolder.uri.fsPath
    : path.dirname(uri.fsPath);
  const pintPath = path.join(cwd, "vendor", "bin", "pint");

  if (!fs.existsSync(pintPath)) {
    throw new Error(
      "Laravel Pint is not installed. Run `composer require laravel/pint --dev` in your project."
    );
  }

  return spawn(pintPath, args, { cwd });
}
