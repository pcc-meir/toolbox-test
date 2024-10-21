import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import beautify from 'js-beautify';
import { useToolboxTranslation } from '../../hooks.esm.js';

const HTMLBeautify = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const { t } = useToolboxTranslation();
  const sample = "<html><head><title>BACKSTAGE FTW!!</title></head><body><p>BACKSTAGE IS THE BEST!!</p></body></html>";
  useEffect(() => {
    let err;
    try {
      setOutput(beautify.html_beautify(input));
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
      inputLabel: t("tool.format-html.inputLabel"),
      outputLabel: t("tool.format-html.outputLabel"),
      acceptFileTypes: ".html,.htm",
      allowFileDownload: true,
      downloadFileName: "download.html",
      downloadFileType: "text/html"
    }
  );
};

export { HTMLBeautify, HTMLBeautify as default };
//# sourceMappingURL=HTMLBeautify.esm.js.map
