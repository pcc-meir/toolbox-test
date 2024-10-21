import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { Parser } from '@json2csv/plainjs';

const JsonToCsv = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const sample = JSON.stringify(
    [
      { type: "car", name: "pedro", stars: 3 },
      { type: "plant", name: "samuel", stars: 2 }
    ],
    null,
    4
  );
  useEffect(() => {
    let obj;
    let err;
    try {
      obj = JSON.parse(input);
    } catch (e) {
      err = e.message;
    }
    if (obj) {
      try {
        const parser = new Parser();
        setOutput(parser.parse(obj));
        return;
      } catch (e) {
        err = e.message;
      }
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
      inputLabel: "JSON",
      outputLabel: "CSV",
      allowFileUpload: true,
      acceptFileTypes: ".json",
      allowFileDownload: true,
      downloadFileName: "download.csv",
      downloadFileType: "text/csv"
    }
  );
};

export { JsonToCsv, JsonToCsv as default };
//# sourceMappingURL=JsonToCsv.esm.js.map
