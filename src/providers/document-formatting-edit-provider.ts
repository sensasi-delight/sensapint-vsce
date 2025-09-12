import { DocumentFormattingEditProvider } from "vscode";
import { formatWithPint } from "../utils/format-with-pint";
import notifyFormatSuccess from "../utils/notify-format-success";
import notifyFormatError from "../utils/notify-format-error";

const documentFormattingEditProvider: DocumentFormattingEditProvider = {
  provideDocumentFormattingEdits(document) {
    formatWithPint(document).then(notifyFormatSuccess).catch(notifyFormatError);

    return null;
  },
};

export default documentFormattingEditProvider;
