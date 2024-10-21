import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import YAML from 'yaml';
import { JsonSpaceSelector } from '../DefaultEditor/JsonSpaceSelector.esm.js';

const YamlToJson = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [spaces, setSpaces] = React.useState(4);
  const sample = "- type: car\n  name: pedro\n  stars: 3\n- type: plant\n  name: samuel\n  stars: 2\n";
  useEffect(() => {
    let obj;
    let err;
    try {
      obj = YAML.parse(input);
    } catch (e) {
      err = e.message;
    }
    if (obj) {
      setOutput(JSON.stringify(obj, null, spaces));
    } else if (input) {
      setOutput(err);
    } else {
      setOutput("");
    }
  }, [input, spaces]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      output,
      sample,
      allowFileUpload: true,
      inputLabel: "YAML",
      outputLabel: "JSON",
      acceptFileTypes: ".yaml,.yml",
      additionalTools: [
        /* @__PURE__ */ React.createElement(JsonSpaceSelector, { spaces, onChange: setSpaces })
      ],
      allowFileDownload: true,
      downloadFileName: "download.json",
      downloadFileType: "application/json"
    }
  );
};

export { YamlToJson, YamlToJson as default };
//# sourceMappingURL=YamlToJson.esm.js.map
