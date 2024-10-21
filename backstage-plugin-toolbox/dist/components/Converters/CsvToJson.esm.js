import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import csvToJson from 'csvtojson';
import { JsonSpaceSelector } from '../DefaultEditor/JsonSpaceSelector.esm.js';

const CsvToJson = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [spaces, setSpaces] = React.useState(4);
  const sample = 'color,maxSpeed,type\n"red",120,"truck"\n"blue",100,"panzerwagen"\n"green",130,"suv"';
  useEffect(() => {
    const getJson = async (value) => {
      const obj = await csvToJson().fromString(value);
      return JSON.stringify(obj, null, spaces);
    };
    getJson(input).then((val) => setOutput(val)).catch((e) => setOutput(`Invalid CSV: ${e.message}`));
  }, [input, spaces]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      output,
      sample,
      inputLabel: "CSV",
      outputLabel: "JSON",
      allowFileUpload: true,
      acceptFileTypes: ".csv",
      allowFileDownload: true,
      downloadFileName: "download.json",
      downloadFileType: "application/json",
      additionalTools: [
        /* @__PURE__ */ React.createElement(JsonSpaceSelector, { spaces, onChange: setSpaces })
      ]
    }
  );
};

export { CsvToJson, CsvToJson as default };
//# sourceMappingURL=CsvToJson.esm.js.map
