import { jsonInputForTargetLanguage, InputData, quicktype } from 'quicktype-core';
import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const formatOptions = [
  "TypeScript",
  "Ruby",
  "JavaScript",
  "Flow",
  "Rust",
  "Kotlin",
  "Dart",
  "Python",
  "C#",
  "Go",
  "C++",
  "Java",
  "Scala3",
  "Swift",
  "Objective-C",
  "Elm",
  "JSON Schema",
  "Pike",
  "JavaScript PropTypes",
  "Haskell",
  "PHP",
  void 0
];
const Interface = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [format, setFormat] = React.useState("TypeScript");
  const typeSelect = /* @__PURE__ */ React.createElement(
    Select,
    {
      label: "format",
      value: format,
      onChange: (val) => setFormat(val.target.value),
      variant: "standard"
    },
    formatOptions.map((opt) => /* @__PURE__ */ React.createElement(MenuItem, { value: opt }, opt))
  );
  useEffect(() => {
    quicktypeJSON(format, input).then(({ lines }) => {
      setOutput(lines.join("\n"));
    }).catch((error) => {
      setOutput(error);
    });
  }, [input, format]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      additionalTools: [typeSelect],
      output
    }
  );
};
async function quicktypeJSON(targetLanguage, jsonString) {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);
  await jsonInput.addSource({
    name: "MyInterface",
    samples: [jsonString]
  });
  const inputData = new InputData();
  inputData.addInput(jsonInput);
  return await quicktype({
    inputData,
    lang: targetLanguage,
    rendererOptions: { "just-types": "true" }
  });
}

export { Interface, Interface as default };
//# sourceMappingURL=Interface.esm.js.map
