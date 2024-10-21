import { useStyles } from '../../utils/hooks.esm.js';
import React from 'react';
import { DateTime } from 'luxon';
import { ClearValueButton } from '../Buttons/ClearValueButton.esm.js';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton.esm.js';
import '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import { useToolboxTranslation } from '../../hooks.esm.js';
import { PasteFromClipboardButton } from '../Buttons/PasteFromClipboardButton.esm.js';
import '@mui/icons-material/Input';
import '@mui/icons-material/AttachFile';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const TimeConverter = () => {
  const { classes } = useStyles();
  const [input, setInput] = React.useState(null);
  const [inputType, setInputType] = React.useState("unix");
  const { t } = useToolboxTranslation();
  const getInputStr = () => {
    if (input === null) {
      return "";
    }
    switch (inputType) {
      default:
      case "unix":
        return input?.toSeconds().toFixed(0).toString();
      case "iso8601":
        return input.toISO();
      case "milliseconds":
        return input.toMillis().toString(10);
      case "rfc2822":
        return input.toRFC2822();
      case "http":
        return input.toHTTP();
      case "sql":
        return input.toSQL();
    }
  };
  const handleChange = (value) => {
    if (value.length === 0) {
      setInput(null);
      return;
    }
    switch (inputType) {
      default:
      case "unix":
        setInput(DateTime.fromSeconds(Number.parseInt(value, 10)));
        break;
      case "iso8601":
        setInput(DateTime.fromISO(value));
        break;
      case "milliseconds":
        setInput(DateTime.fromMillis(Number.parseInt(value, 10)));
        break;
      case "rfc2822":
        setInput(DateTime.fromRFC2822(value));
        break;
      case "http":
        setInput(DateTime.fromHTTP(value));
        break;
      case "sql":
        setInput(DateTime.fromSQL(value));
        break;
    }
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12, lg: 8 }, /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput: (v) => handleChange(v) }), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: () => handleChange("") }), /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "small",
      onClick: () => setInput(DateTime.now()),
      color: "inherit"
    },
    t("tool.time-convert.labelNow")
  )), /* @__PURE__ */ React.createElement(
    TextField,
    {
      className: classes.fullWidth,
      id: "input",
      name: "input",
      label: t("tool.time-convert.labelInput"),
      value: getInputStr(),
      onChange: (e) => handleChange(e.target.value),
      variant: "outlined"
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12, lg: 4 }, /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, t("tool.time-convert.inputType")), /* @__PURE__ */ React.createElement(
    Select,
    {
      value: inputType,
      onChange: (e) => setInputType(e.target.value)
    },
    /* @__PURE__ */ React.createElement(MenuItem, { value: "unix" }, t("tool.time-convert.unixTime")),
    /* @__PURE__ */ React.createElement(MenuItem, { value: "milliseconds" }, t("tool.time-convert.millisecondsTime")),
    /* @__PURE__ */ React.createElement(MenuItem, { value: "iso8601" }, "ISO8601"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: "sql" }, "SQL"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: "rfc2822" }, "RFC2822"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: "http" }, "HTTP")
  ))), /* @__PURE__ */ React.createElement(Divider, { style: { marginTop: "1rem", marginBottom: "1rem" } }), /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(Grid, { item: true, lg: 5, md: 8, xs: 12 }, /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: `${t("tool.time-convert.outputLabel.local")} (ISO8601)`,
      value: input?.toLocal().toString()
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: "UTC (ISO8601)",
      value: input?.toUTC().toString()
    }
  ), /* @__PURE__ */ React.createElement(OutputField, { label: "Relative", value: input?.toRelative() }), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.time-convert.outputLabel.unix"),
      value: input?.toSeconds().toFixed(0).toString()
    }
  ), /* @__PURE__ */ React.createElement(OutputField, { label: "RFC2822", value: input?.toRFC2822() }), /* @__PURE__ */ React.createElement(OutputField, { label: "HTTP", value: input?.toHTTP() })), /* @__PURE__ */ React.createElement(Grid, { item: true, lg: 2, md: 4, xs: 12 }, /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.time-convert.outputLabel.dayOfTheWeek"),
      value: input?.toFormat("c")
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.time-convert.outputLabel.weekNumber"),
      value: input?.toFormat("W")
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.time-convert.outputLabel.quarter"),
      value: input?.toFormat("q")
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.time-convert.outputLabel.dayOfTheYear"),
      value: input?.toFormat("o")
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.time-convert.outputLabel.leapYear"),
      value: input?.isInLeapYear ? "true" : "false"
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true, lg: 5, md: 12, xs: 12 }, /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.time-convert.outputLabel.local"),
      value: input?.toLocaleString(DateTime.DATETIME_FULL)
    }
  ), /* @__PURE__ */ React.createElement(OutputField, { label: "SQL", value: input?.toSQL() }), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: "YYYY-MM-DD",
      value: input?.toFormat("yyyy-MM-dd")
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: "DD/MM/YYYY",
      value: input?.toFormat("dd/MM/yyyy")
    }
  ), /* @__PURE__ */ React.createElement(
    OutputField,
    {
      label: t("tool.time-convert.outputLabel.timezone"),
      value: input?.toFormat("z")
    }
  )))));
};

export { TimeConverter, TimeConverter as default };
//# sourceMappingURL=TimeConverter.esm.js.map
