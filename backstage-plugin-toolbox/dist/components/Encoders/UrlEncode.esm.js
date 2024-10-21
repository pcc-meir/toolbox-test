import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';

const UrlEncode = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [mode, setMode] = React.useState("Encode");
  useEffect(() => {
    let url = "";
    let errorMessage = "";
    try {
      url = mode === "Encode" ? encodeURI(input) : decodeURI(input);
    } catch (error) {
      errorMessage = `couldn't ${mode === "Encode" ? "encode" : "decode"} URL...`;
    }
    setOutput(url || errorMessage);
  }, [input, mode]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      mode,
      setInput,
      setMode,
      output,
      modes: ["Encode", "Decode"],
      sample: mode === "Encode" ? "https://backstage.io/?query= hello\\world{}" : "https://backstage.io/?query=%20hello%5Cworld%7B%7D"
    }
  );
};

export { UrlEncode, UrlEncode as default };
//# sourceMappingURL=UrlEncode.esm.js.map
