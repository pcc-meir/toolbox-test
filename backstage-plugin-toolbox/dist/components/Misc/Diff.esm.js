import { loader, DiffEditor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import React, { useMemo, useState, useEffect } from 'react';
import { useStyles } from '../../utils/hooks.esm.js';
import useEffectOnce from 'react-use/lib/useEffectOnce';
import { Select } from '@backstage/core-components';
import { ClearValueButton } from '../Buttons/ClearValueButton.esm.js';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton.esm.js';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import { useToolboxTranslation } from '../../hooks.esm.js';
import { PasteFromClipboardButton } from '../Buttons/PasteFromClipboardButton.esm.js';
import Input from '@mui/icons-material/Input';
import { FileUploadButton } from '../Buttons/FileUploadButton.esm.js';
import { useApi, appThemeApiRef } from '@backstage/core-plugin-api';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';

loader.config({ monaco });
const options = {
  originalEditable: true,
  diffCodeLens: true,
  dragAndDrop: true,
  tabCompletion: "on",
  renderSideBySide: true
};
function getLanguage(allowedLanguages, extension) {
  return allowedLanguages.find(
    (monacoLanguage) => monacoLanguage.extensions.includes(extension)
  )?.name;
}
function readFileAndSetText(file, setText, setLanguage, allowedLanguages) {
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = async (e) => {
    setText(e.target.result);
  };
  reader.readAsText(file);
  let newLanguage = "plaintext";
  const extension = `.${file.name.split(".").pop()}`;
  if (allowedLanguages?.length) {
    newLanguage = getLanguage(allowedLanguages, extension) || newLanguage;
  }
  setLanguage(newLanguage);
}
const SampleButton = (props) => {
  const { sample, setInput } = props;
  const { t } = useToolboxTranslation();
  return /* @__PURE__ */ React.createElement(Tooltip, { arrow: true, title: t("components.sampleButton.tooltipTitle") }, /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "small",
      startIcon: /* @__PURE__ */ React.createElement(Input, null),
      onClick: () => setInput(sample),
      color: "inherit"
    },
    t("components.sampleButton.buttonText")
  ));
};
function Diff() {
  const { classes } = useStyles();
  const appThemeApi = useApi(appThemeApiRef);
  const theme = useMemo(
    () => appThemeApi.getActiveThemeId() ?? "light",
    [appThemeApi]
  );
  const [originalFile, setOriginalFile] = useState();
  const [modifiedFile, setModifiedFile] = useState();
  const [originalText, setOriginalText] = useState("");
  const [modifiedText, setModifiedText] = useState("");
  const [language, setLanguage] = useState("plaintext");
  const [allowedLanguages, setAllowedLanguages] = useState(
    []
  );
  const { t } = useToolboxTranslation();
  const exampleOriginalText = "Backstage toolbox\n\ncompare text";
  const exampleModifiedText = "Backstage toolbox\ndiff editor";
  const handleLanguageSelect = (selected) => {
    setLanguage(selected);
  };
  useEffect(() => {
    readFileAndSetText(
      modifiedFile,
      setModifiedText,
      setLanguage,
      allowedLanguages
    );
  }, [modifiedFile, allowedLanguages]);
  useEffect(() => {
    readFileAndSetText(
      originalFile,
      setOriginalText,
      setLanguage,
      allowedLanguages
    );
  }, [originalFile, allowedLanguages]);
  useEffectOnce(() => {
    const languages = monaco.languages.getLanguages().map((each) => {
      return { name: each.id, extensions: each.extensions || [] };
    });
    setAllowedLanguages(languages);
  });
  const languageOptions = allowedLanguages ? allowedLanguages.map((i) => ({ label: i.name, value: i.name })) : [{ label: t("tool.diff.loadingLabel"), value: "loading" }];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { container: true, style: { width: "100%" } }, /* @__PURE__ */ React.createElement(Grid, { item: true, style: { minWidth: "200px" } }, /* @__PURE__ */ React.createElement(
    Select,
    {
      selected: language,
      onChange: handleLanguageSelect,
      items: languageOptions,
      label: t("tool.diff.selectLanguage")
    }
  ))), /* @__PURE__ */ React.createElement(Grid, { container: true, style: { width: "100%" } }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    SampleButton,
    {
      setInput: (input) => {
        setOriginalText(input[0]);
        setModifiedText(input[1]);
      },
      sample: [exampleOriginalText, exampleModifiedText]
    }
  ))), /* @__PURE__ */ React.createElement(Grid, { container: true, style: { marginBottom: "5px", width: "100%" } }, /* @__PURE__ */ React.createElement(Grid, { item: true, style: { width: "50%" } }, /* @__PURE__ */ React.createElement(ButtonGroup, { size: "small" }, /* @__PURE__ */ React.createElement(
    FileUploadButton,
    {
      onFileLoad: setOriginalFile,
      id: "originalFile",
      buttonText: t("tool.diff.originalFileUploadButton")
    }
  ), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: setOriginalText }), /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput: setOriginalText }), originalText && /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output: originalText }))), /* @__PURE__ */ React.createElement(Grid, { item: true, style: { width: "50%" } }, /* @__PURE__ */ React.createElement(ButtonGroup, { size: "small" }, /* @__PURE__ */ React.createElement(
    FileUploadButton,
    {
      onFileLoad: setModifiedFile,
      id: "modifiedFile",
      buttonText: t("tool.diff.modifiedFileUploadButton")
    }
  ), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: setModifiedText }), /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput: setModifiedText }), modifiedText && /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output: modifiedText })))), /* @__PURE__ */ React.createElement(
    DiffEditor,
    {
      height: "100vh",
      original: originalText,
      theme: theme.includes("dark") ? "vs-dark" : "vs-light",
      modified: modifiedText,
      options,
      language
    }
  )));
}

export { SampleButton, Diff as default };
//# sourceMappingURL=Diff.esm.js.map
