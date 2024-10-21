import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import YAML from 'yaml';

const JsonToYaml = () => {
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
      setOutput(YAML.stringify(obj));
    } else if (input) {
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
      inputLabel: "JSON",
      outputLabel: "YAML",
      acceptFileTypes: ".json",
      allowFileDownload: true,
      downloadFileName: "download.yaml",
      downloadFileType: "application/yaml"
    }
  );
};

export { JsonToYaml, JsonToYaml as default };
//# sourceMappingURL=JsonToYaml.esm.js.map
