import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useToolboxTranslation } from '../../hooks.esm.js';

const ANALYZED_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 :;,.!?*+^${}()|/\\";
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const StringAnalyzer = () => {
  const [input, setInput] = React.useState("");
  const [characters, setCharacters] = React.useState(0);
  const [lines, setLines] = React.useState(0);
  const [words, setWords] = React.useState(0);
  const [alphabets, setAlphabets] = React.useState([]);
  const { t } = useToolboxTranslation();
  useEffect(() => {
    setCharacters(input.length);
    setLines(input ? input.split(/\r\n|\r|\n/g).length : 0);
    setWords(input ? input.split(/\s+/).length : 0);
    const charCounts = [];
    let totalCount = 0;
    for (const char of ANALYZED_CHARS) {
      const count = input.split(new RegExp(escapeRegex(char), "gi")).length - 1;
      totalCount += count;
      charCounts.push({ char: char === " " ? "Whitespace" : char, count });
    }
    charCounts.push({ char: "Others", count: input.length - totalCount });
    setAlphabets(charCounts);
  }, [input]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      allowFileUpload: true,
      acceptFileTypes: ".json,.csv,.txt,.html,.xml,.yaml,.yml,.log,.md,.markdown,.js,.ts,.c,.cpp,.java,.py,.rb,.php,.sh,.bat",
      sample: faker.lorem.paragraphs(Math.random() * 10 + 1, "\n"),
      rightContent: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12 }, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, t("tool.string-analyzer.overallStats"))), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
        TextField,
        {
          label: "Characters",
          value: characters,
          variant: "standard"
        }
      )), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(TextField, { label: "Lines", value: lines, variant: "standard" })), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(TextField, { label: "Words", value: words, variant: "standard" }))), /* @__PURE__ */ React.createElement(Grid, { container: true, style: { marginTop: "1rem" } }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12 }, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, t("tool.string-analyzer.characterStats"))), alphabets.map(({ char, count }) => /* @__PURE__ */ React.createElement(Grid, { item: true, key: char }, /* @__PURE__ */ React.createElement(
        TextField,
        {
          label: char,
          value: count,
          size: "small",
          variant: "standard"
        }
      )))))
    }
  );
};

export { StringAnalyzer, StringAnalyzer as default };
//# sourceMappingURL=StringAnalyzer.esm.js.map
