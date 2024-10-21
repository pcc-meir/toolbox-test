import React from 'react';
import { useStyles } from '../../utils/hooks.esm.js';
import { ClearValueButton } from '../Buttons/ClearValueButton.esm.js';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton.esm.js';
import '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import { useToolboxTranslation } from '../../hooks.esm.js';
import { PasteFromClipboardButton } from '../Buttons/PasteFromClipboardButton.esm.js';
import { SampleButton } from '../Buttons/SampleButton.esm.js';
import { FileUploadButton } from '../Buttons/FileUploadButton.esm.js';
import { FileDownloadButton } from '../Buttons/FileDownloadButton.esm.js';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const DefaultEditor = (props) => {
  const { t } = useToolboxTranslation();
  const {
    input,
    setInput,
    output,
    inputLabel = t("components.defaultEditor.inputLabel"),
    outputLabel = t("components.defaultEditor.outputLabel"),
    mode,
    setMode,
    modes,
    leftContent,
    extraLeftContent,
    rightContent,
    extraRightContent,
    sample,
    additionalTools,
    allowFileUpload,
    acceptFileTypes,
    allowFileDownload,
    downloadFileName,
    downloadFileType,
    minRows = 20
  } = props;
  const { classes } = useStyles();
  const [fileName, setFileName] = React.useState(
    downloadFileName ?? "download.txt"
  );
  const [fileType, setFileType] = React.useState(
    downloadFileType ?? "text/plain"
  );
  const readFileAndSetInput = (file) => {
    if (!file) {
      setInput("");
      return;
    }
    setFileName(file.name);
    setFileType(file.type);
    const reader = new FileReader();
    reader.onload = async (e) => {
      setInput(e.target.result);
    };
    reader.readAsText(file);
  };
  const handleDrop = (ev) => {
    if (allowFileUpload !== true) {
      return;
    }
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item) => {
        if (item.kind !== "file") {
          return;
        }
        const file = item.getAsFile();
        if (file) {
          readFileAndSetInput(file);
        }
      });
    } else {
      [...ev.dataTransfer.files].forEach((file) => {
        readFileAndSetInput(file);
      });
    }
  };
  return /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth, onDrop: handleDrop }, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 4, style: { marginBottom: "5px" } }, modes && modes.length > 0 && /* @__PURE__ */ React.createElement(Grid, { item: true, sx: { pl: "16px", pt: "32px !important" } }, /* @__PURE__ */ React.createElement(
    ButtonGroup,
    {
      size: "small",
      disableElevation: true,
      variant: "contained",
      "aria-label": "Disabled elevation buttons",
      style: { marginBottom: "1rem" },
      color: "inherit"
    },
    modes.map((m) => /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "small",
        key: m,
        onClick: () => setMode && setMode(m),
        variant: mode === m ? "contained" : "outlined",
        color: "inherit",
        sx: {
          ...mode === m && {
            color: "#000000",
            backgroundColor: "#E0E0E0"
          },
          ...mode !== m && {
            borderColor: "#E0E0E0"
          }
        }
      },
      t(`components.defaultEditor.mode.${m.toLowerCase()}`, {
        defaultValue: m
      })
    ))
  )), /* @__PURE__ */ React.createElement(Grid, { item: true, sx: { p: "16px" } }, /* @__PURE__ */ React.createElement(ButtonGroup, { size: "small" }, /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: setInput }), /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput }), output && /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output }), sample && /* @__PURE__ */ React.createElement(SampleButton, { setInput, sample }), allowFileUpload && /* @__PURE__ */ React.createElement(
    FileUploadButton,
    {
      accept: acceptFileTypes,
      onFileLoad: readFileAndSetInput
    }
  ), output && allowFileDownload && /* @__PURE__ */ React.createElement(
    FileDownloadButton,
    {
      content: output,
      fileName,
      fileType
    }
  ))), additionalTools && additionalTools.length > 0 && /* @__PURE__ */ React.createElement(Grid, { item: true }, additionalTools.map((tool) => tool))), /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(
    Grid,
    {
      item: true,
      xs: 12,
      lg: 6,
      sx: { pt: "8px !important", pl: "8px !important" }
    },
    leftContent ? leftContent : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      TextField,
      {
        label: inputLabel,
        id: "input",
        multiline: true,
        className: classes.fullWidth,
        value: input,
        onChange: (e) => setInput(e.target.value),
        minRows,
        variant: "outlined",
        sx: {
          p: "8px",
          '& label[class*="MuiFormLabel-root"]': {
            paddingTop: "10px !important",
            paddingLeft: "10px !important"
          }
        }
      }
    )),
    extraLeftContent
  ), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12, lg: 6, sx: { p: "8px !important", mt: "8px" } }, rightContent ? rightContent : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    TextField,
    {
      id: "output",
      label: outputLabel,
      value: output || "",
      className: classes.fullWidth,
      multiline: true,
      minRows,
      variant: "outlined"
    }
  )), extraRightContent)));
};

export { DefaultEditor };
//# sourceMappingURL=DefaultEditor.esm.js.map
