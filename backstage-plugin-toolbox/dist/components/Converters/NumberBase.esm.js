import React from 'react';
import { useStyles } from '../../utils/hooks.esm.js';
import { ClearValueButton } from '../Buttons/ClearValueButton.esm.js';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton.esm.js';
import '@mui/material/Tooltip';
import '@mui/material/Button';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import { useToolboxTranslation } from '../../hooks.esm.js';
import { PasteFromClipboardButton } from '../Buttons/PasteFromClipboardButton.esm.js';
import '@mui/icons-material/Input';
import '@mui/icons-material/AttachFile';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const NumberBase = () => {
  const { classes } = useStyles();
  const [state, setState] = React.useState({
    binary: "",
    octal: "",
    decimal: "",
    hex: ""
  });
  const { t } = useToolboxTranslation();
  const handleChange = (name, value) => {
    if (value.length === 0) {
      setState({ binary: "", octal: "", decimal: "", hex: "" });
      return;
    }
    let base;
    switch (name) {
      case "binary":
        base = parseInt(value, 2);
        break;
      case "octal":
        base = parseInt(value, 8);
        break;
      case "decimal":
        base = parseInt(value, 10);
        break;
      case "hex":
        base = parseInt(value, 16);
        break;
      default:
        base = NaN;
    }
    if (isNaN(base)) {
      return;
    }
    setState({
      binary: base.toString(2),
      octal: base.toString(8),
      decimal: base.toString(10),
      hex: base.toString(16)
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, t("tool.number-base-convert.base2"), /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput: (v) => handleChange("binary", v) }), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: () => handleChange("binary", "") }), /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output: state.binary })), /* @__PURE__ */ React.createElement(
    TextField,
    {
      className: classes.fullWidth,
      id: "binary",
      name: "binary",
      value: state.binary,
      onChange: (e) => handleChange("binary", e.target.value),
      variant: "outlined"
    }
  ), /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, t("tool.number-base-convert.base8"), /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput: (v) => handleChange("octal", v) }), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: () => handleChange("octal", "") }), /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output: state.octal })), /* @__PURE__ */ React.createElement(
    TextField,
    {
      className: classes.fullWidth,
      id: "octal",
      name: "octal",
      value: state.octal,
      onChange: (e) => handleChange("octal", e.target.value),
      variant: "outlined"
    }
  ), /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, t("tool.number-base-convert.base10"), /* @__PURE__ */ React.createElement(
    PasteFromClipboardButton,
    {
      setInput: (v) => handleChange("decimal", v)
    }
  ), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: () => handleChange("decimal", "") }), /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output: state.decimal })), /* @__PURE__ */ React.createElement(
    TextField,
    {
      className: classes.fullWidth,
      id: "decimal",
      name: "decimal",
      value: state.decimal,
      onChange: (e) => handleChange("decimal", e.target.value),
      variant: "outlined"
    }
  ), /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, t("tool.number-base-convert.base16"), /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput: (v) => handleChange("hex", v) }), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: () => handleChange("hex", "") }), /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output: state.hex })), /* @__PURE__ */ React.createElement(
    TextField,
    {
      className: classes.fullWidth,
      id: "hex",
      name: "hex",
      value: state.hex,
      onChange: (e) => handleChange("hex", e.target.value),
      variant: "outlined"
    }
  )));
};

export { NumberBase, NumberBase as default };
//# sourceMappingURL=NumberBase.esm.js.map
