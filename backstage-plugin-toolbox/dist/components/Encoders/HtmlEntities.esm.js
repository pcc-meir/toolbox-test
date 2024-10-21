import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';

const decode = (value) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = value;
  return textArea.value;
};
const encode = (value) => {
  const textArea = document.createElement("textarea");
  textArea.innerText = value;
  return textArea.innerHTML;
};
const HtmlEntities = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [mode, setMode] = React.useState("Encode");
  useEffect(() => {
    if (mode === "Encode") {
      setOutput(encode(input));
    } else {
      setOutput(decode(input));
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
      sample: mode === "Encode" ? "& there it was >.<" : "&amp; there it was &gt;.&lt;"
    }
  );
};

export { HtmlEntities, HtmlEntities as default };
//# sourceMappingURL=HtmlEntities.esm.js.map
