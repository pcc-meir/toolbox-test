import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';

const charCodeMap = {
  "\\n": 13,
  "\\t": 9,
  "\\b": 8,
  "\\\\": 220,
  "\\'": 222,
  '\\"': 34
};
const Backslash = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [mode, setMode] = React.useState("Escape");
  useEffect(() => {
    if (mode === "Escape") {
      const str = JSON.stringify(input);
      setOutput(str.substring(1, str.length - 1));
    } else {
      let str = input;
      for (const [key, value] of Object.entries(charCodeMap)) {
        str = str.replaceAll(key, String.fromCharCode(value));
      }
      setOutput(str);
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
      modes: ["Escape", "Unescape"],
      sample: mode === "Escape" ? 'Hello	"World"' : 'Hello\\t\\"World\\"'
    }
  );
};

export { Backslash, Backslash as default };
//# sourceMappingURL=Backslash.esm.js.map
