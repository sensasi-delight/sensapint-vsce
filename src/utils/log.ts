import { window } from "vscode";

function formatTimestamp(date = new Date()): string {
  const pad = (n: number, width = 2) => n.toString().padStart(width, "0");
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    " " +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    "." +
    date.getMilliseconds().toString().padStart(3, "0")
  );
}

const output = window.createOutputChannel("Sensapint");

export default function log(
  level: "info" | "warning" | "error",
  message: string
) {
  const line = `${formatTimestamp()} [${level}] ${message}`;
  output.appendLine(line);
}
