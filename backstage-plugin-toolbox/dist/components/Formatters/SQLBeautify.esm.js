import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { format } from 'sql-formatter';
import { useToolboxTranslation } from '../../hooks.esm.js';

const SQLBeautify = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const { t } = useToolboxTranslation();
  const sample = "SELECT bar, foo FROM foo_bar WHERE foo='bar' GROUP BY bar";
  useEffect(() => {
    let err;
    try {
      setOutput(format(input));
      return;
    } catch (e) {
      err = e.message;
    }
    if (input && err) {
      setOutput(err);
    } else {
      setOutput("");
    }
  }, [input]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      output,
      sample,
      allowFileUpload: true,
      acceptFileTypes: ".sql",
      inputLabel: t("tool.format-sql.inputLabel"),
      outputLabel: t("tool.format-sql.outputLabel"),
      allowFileDownload: true,
      downloadFileName: "download.sql",
      downloadFileType: "text/plain"
    }
  );
};

export { SQLBeautify, SQLBeautify as default };
//# sourceMappingURL=SQLBeautify.esm.js.map
