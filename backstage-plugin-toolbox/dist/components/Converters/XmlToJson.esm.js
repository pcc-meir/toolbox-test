import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { xml2json } from 'xml-js';
import { JsonSpaceSelector } from '../DefaultEditor/JsonSpaceSelector.esm.js';
import { useToolboxTranslation } from '../../hooks.esm.js';

const XmlToJson = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [spaces, setSpaces] = React.useState(4);
  const { t } = useToolboxTranslation();
  const sample = '<elements><element id="123"/><element id="325" name="April"/></elements>';
  useEffect(() => {
    try {
      const json = xml2json(input);
      const obj = JSON.parse(json);
      setOutput(JSON.stringify(obj, null, spaces));
    } catch (e) {
      setOutput(`${t("tool.xml-to-json-convert.invalidFormat")}: ${e.message}`);
    }
  }, [input, spaces, t]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      output,
      sample,
      allowFileUpload: true,
      inputLabel: "XML",
      outputLabel: "JSON",
      acceptFileTypes: ".xml",
      additionalTools: [
        /* @__PURE__ */ React.createElement(JsonSpaceSelector, { spaces, onChange: setSpaces })
      ],
      allowFileDownload: true,
      downloadFileName: "download.json",
      downloadFileType: "application/json"
    }
  );
};

export { XmlToJson, XmlToJson as default };
//# sourceMappingURL=XmlToJson.esm.js.map
