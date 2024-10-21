import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import beautify from 'js-beautify';
import { useToolboxTranslation } from '../../hooks.esm.js';

const CSSBeautify = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const { t } = useToolboxTranslation();
  const sample = '.selector_1 {width: 10px;font-size:2px;} #backstage_ftw {font-size: 200px; content: "BACKSTAGE IS THE BEST!"}';
  useEffect(() => {
    let err;
    try {
      setOutput(beautify.css_beautify(input));
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
      inputLabel: t("tool.format-css.inputLabel"),
      outputLabel: t("tool.format-css.outputLabel"),
      acceptFileTypes: ".css",
      allowFileDownload: true,
      downloadFileName: "download.css",
      downloadFileType: "text/css"
    }
  );
};

export { CSSBeautify, CSSBeautify as default };
//# sourceMappingURL=CSSBeautify.esm.js.map
