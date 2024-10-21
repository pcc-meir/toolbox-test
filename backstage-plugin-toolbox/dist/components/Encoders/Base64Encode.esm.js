import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';

const Base64Encode = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [mode, setMode] = React.useState("Encode");
  useEffect(() => {
    if (mode === "Encode") {
      setOutput(Buffer.from(input).toString("base64"));
    } else {
      setOutput(Buffer.from(input, "base64").toString());
    }
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
      allowFileUpload: true,
      sample: mode === "Encode" ? "Hello world!" : "SGVsbG8gd29ybGQh"
    }
  );
};

export { Base64Encode, Base64Encode as default };
//# sourceMappingURL=Base64Encode.esm.js.map
