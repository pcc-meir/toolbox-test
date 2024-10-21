import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import beautify from 'js-beautify';
import { useToolboxTranslation } from '../../hooks.esm.js';

const JSBeautify = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const { t } = useToolboxTranslation();
  const sample = '[{"type": "car","name": "pedro","stars": 3},{"type": "plant","name": "samuel","stars": 2}]';
  useEffect(() => {
    let err;
    try {
      setOutput(beautify(input));
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
      inputLabel: t("tool.format-js.inputLabel"),
      outputLabel: t("tool.format-js.outputLabel"),
      acceptFileTypes: ".js,.jsx,.ts,.tsx,.json",
      allowFileDownload: true,
      downloadFileName: "download.js",
      downloadFileType: "text/javascript"
    }
  );
};

export { JSBeautify, JSBeautify as default };
//# sourceMappingURL=JSBeautify.esm.js.map
