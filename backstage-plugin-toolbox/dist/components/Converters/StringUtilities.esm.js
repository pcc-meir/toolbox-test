import React, { useCallback, useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { capitalize, lowerCase, upperCase, kebabCase, snakeCase, camelCase } from 'lodash';
import TextField from '@mui/material/TextField';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { useToolboxTranslation } from '../../hooks.esm.js';

const StringUtilities = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [mode, setMode] = React.useState("Replace");
  const [searchWord, setSearchWord] = React.useState("");
  const [replaceWord, setReplaceWord] = React.useState("");
  const [isUseRegexpEnabled, setIsUseRegexpEnabled] = React.useState(false);
  const { t } = useToolboxTranslation();
  const sample = [
    "requestURLDecoder",
    "HTTP_CLIENT_FACTORY",
    "generic_activity",
    "WeirdActivity",
    "kebab-is-good",
    "Normal text"
  ].join("\n");
  const mapLinesAndJoin = (str, callback) => {
    return str.split("\n").map(callback).join("\n");
  };
  const transformString = useCallback(
    (inputString, transformMode, search, replace, useRegexp) => {
      switch (transformMode) {
        case "Replace":
          if (!useRegexp) {
            return inputString.replaceAll(search, replace);
          }
          try {
            return inputString.replace(new RegExp(search, "g"), replace);
          } catch (e) {
            throw new Error(`Invalid RegExp: ${e.message}`);
          }
        case "Camel":
          return mapLinesAndJoin(inputString, camelCase);
        case "Snake":
          return mapLinesAndJoin(inputString, snakeCase);
        case "Kebab":
          return mapLinesAndJoin(inputString, kebabCase);
        case "Upper":
          return mapLinesAndJoin(inputString, upperCase);
        case "Lower":
          return mapLinesAndJoin(inputString, lowerCase);
        case "Capitalize":
          return mapLinesAndJoin(inputString, capitalize);
        default:
          return inputString;
      }
    },
    []
  );
  useEffect(() => {
    if (mode !== "Replace" && (searchWord !== "" || replaceWord !== "")) {
      setSearchWord("");
      setReplaceWord("");
    }
    try {
      setOutput(
        transformString(
          input,
          mode,
          searchWord,
          replaceWord,
          isUseRegexpEnabled
        )
      );
    } catch (e) {
      setOutput(e.message);
    }
  }, [
    input,
    mode,
    searchWord,
    replaceWord,
    isUseRegexpEnabled,
    transformString
  ]);
  const extraLeftContent = mode === "Replace" ? /* @__PURE__ */ React.createElement(
    Box,
    {
      display: "flex",
      style: { alignItems: "center", padding: "8px 0 0 8px" }
    },
    /* @__PURE__ */ React.createElement(
      TextField,
      {
        label: t("tool.string-utilities-convert.inputSearch"),
        onChange: (event) => setSearchWord(event.target.value),
        variant: "outlined"
      }
    ),
    /* @__PURE__ */ React.createElement(Box, { style: { paddingLeft: "16px" } }, /* @__PURE__ */ React.createElement(
      FormControlLabel,
      {
        control: /* @__PURE__ */ React.createElement(
          CheckBox,
          {
            checked: isUseRegexpEnabled,
            onClick: () => setIsUseRegexpEnabled(!isUseRegexpEnabled)
          }
        ),
        label: "Regexp"
      }
    )),
    /* @__PURE__ */ React.createElement(
      TextField,
      {
        label: t("tool.string-utilities-convert.inputReplace"),
        onChange: (event) => setReplaceWord(event.target.value)
      }
    )
  ) : void 0;
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      mode,
      setInput,
      setMode,
      output,
      modes: [
        "Replace",
        "Camel",
        "Snake",
        "Kebab",
        "Upper",
        "Lower",
        "Capitalize"
      ],
      sample,
      extraLeftContent
    }
  );
};

export { StringUtilities, StringUtilities as default };
//# sourceMappingURL=StringUtilities.esm.js.map
