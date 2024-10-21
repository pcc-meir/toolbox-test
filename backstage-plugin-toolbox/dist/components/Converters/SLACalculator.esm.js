import { useStyles } from '../../utils/hooks.esm.js';
import React from 'react';
import { ClearValueButton } from '../Buttons/ClearValueButton.esm.js';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton.esm.js';
import '@mui/material/Tooltip';
import '@mui/material/Button';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import { useToolboxTranslation } from '../../hooks.esm.js';
import { PasteFromClipboardButton } from '../Buttons/PasteFromClipboardButton.esm.js';
import { SampleButton } from '../Buttons/SampleButton.esm.js';
import '@mui/icons-material/AttachFile';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

const SLACalculator = () => {
  const { classes } = useStyles();
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState({
    daily: "",
    weekly: "",
    monthly: "",
    quarterly: "",
    yearly: ""
  });
  const [error, setError] = React.useState({
    show: false,
    msg: ""
  });
  const { t } = useToolboxTranslation();
  const convertTime = (value) => {
    let minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
      return `${hours}h ${minutes}m ${seconds}s`;
    }
    return `${minutes}m ${seconds}s`;
  };
  const isValidFloat = (value) => {
    return /^\d+(\.\d*)?$/.test(value);
  };
  const handleChange = (value) => {
    if (value.length === 0) {
      setInput("");
      setOutput({
        daily: "",
        weekly: "",
        monthly: "",
        quarterly: "",
        yearly: ""
      });
      return;
    }
    if (!isValidFloat(value)) {
      setError({ show: true, msg: t("tool.sla-calculator.invalidFormat") });
      return;
    }
    setInput(value);
    setError({ show: false, msg: "" });
    let base = parseFloat(value);
    if (base > 100) {
      setError({ show: true, msg: t("tool.sla-calculator.maxValueError") });
      base = 100;
      setInput("100");
    }
    const daily = (24 - base * 24 / 100) * 60 * 60;
    setOutput({
      daily: convertTime(daily),
      weekly: convertTime(daily * 7),
      monthly: convertTime(daily * 30),
      quarterly: convertTime(daily * 91),
      yearly: convertTime(daily * 365)
    });
  };
  const OutputField = (props) => {
    const { label, value } = props;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      TextField,
      {
        label,
        style: { marginTop: "1rem" },
        className: classes.fullWidth,
        disabled: true,
        value: value ?? ""
      }
    ), /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output: value ?? "" }));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12, lg: 8 }, /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput: (v) => handleChange(v) }), /* @__PURE__ */ React.createElement(
    ClearValueButton,
    {
      setValue: () => {
        handleChange("");
        setError({ show: false, msg: "" });
      }
    }
  ), /* @__PURE__ */ React.createElement(SampleButton, { setInput: handleChange, sample: "99.9" })), /* @__PURE__ */ React.createElement(
    TextField,
    {
      className: classes.fullWidth,
      id: "input",
      label: t("tool.sla-calculator.inputLabel"),
      name: "input",
      value: input,
      onChange: (e) => handleChange(e.target.value),
      variant: "outlined"
    }
  ), error.show ? /* @__PURE__ */ React.createElement(Alert, { severity: "error" }, error.msg) : null)), /* @__PURE__ */ React.createElement(Divider, { style: { marginTop: "1rem", marginBottom: "1rem" } }), /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(Grid, { item: true, lg: 5, md: 8, xs: 12 }, /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.sla-calculator.dailyLabel"),
      value: output.daily
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.sla-calculator.weeklyLabel"),
      value: output.weekly
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.sla-calculator.monthlyLabel"),
      value: output.monthly
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.sla-calculator.quarterlyLabel"),
      value: output.quarterly
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.sla-calculator.yearlyLabel"),
      value: output.yearly
    }
  )))));
};

export { SLACalculator, SLACalculator as default };
//# sourceMappingURL=SLACalculator.esm.js.map
