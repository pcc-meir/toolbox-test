import { useStyles } from '../../utils/hooks.esm.js';
import React from 'react';
import * as colorConvert from 'color-convert';
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
import Box from '@mui/material/Box';

const ColorConverter = () => {
  const { classes } = useStyles();
  const [input, setInput] = React.useState("");
  const [hex, setHex] = React.useState("");
  const [rgb, setRgb] = React.useState([0, 0, 0]);
  const [hsl, setHsl] = React.useState([0, 0, 0]);
  const [hsv, setHsv] = React.useState([0, 0, 0]);
  const [cmyk, setCmyk] = React.useState([0, 0, 0, 0]);
  const [html, setHtml] = React.useState(null);
  const [lab, setLab] = React.useState([0, 0, 0]);
  const [lch, setLch] = React.useState([0, 0, 0]);
  const sample = "#d50032";
  const { t } = useToolboxTranslation();
  let ColorType;
  ((ColorType2) => {
    ColorType2["Hex"] = "HEX";
    ColorType2["Rgb"] = "RGB";
    ColorType2["Hsl"] = "HSL";
    ColorType2["Hsv"] = "HSV";
    ColorType2["Cmyk"] = "CMYK";
    ColorType2["Html"] = "HTML";
    ColorType2["Lab"] = "LAB";
    ColorType2["Lch"] = "LCH";
  })(ColorType || (ColorType = {}));
  const getInputStr = () => input || "";
  const getColorType = (color) => {
    switch (true) {
      case color.includes("#"):
        return "HEX" /* Hex */;
      case color.includes("rgb"):
        return "RGB" /* Rgb */;
      case color.includes("hsl"):
        return "HSL" /* Hsl */;
      case color.includes("hsv"):
        return "HSV" /* Hsv */;
      case color.includes("cmyk"):
        return "CMYK" /* Cmyk */;
      case colorConvert.keyword.rgb(color)?.length === 3:
        return "HTML" /* Html */;
      case color.includes("lab"):
        return "LAB" /* Lab */;
      case color.includes("lch"):
        return "LCH" /* Lch */;
      default:
        return null;
    }
  };
  const parseRgb = ([r, g, b]) => `rgb(${r},${g},${b})`;
  const parseHsl = ([h, s, l]) => `hsl(${h},${s}%,${l}%)`;
  const parseHsv = ([h, s, v]) => `hsv(${h},${s}%,${v}%)`;
  const parseCmyk = ([c, m, y, k]) => `cmyk(${c}%,${m}%,${y}%,${k}%)`;
  const parseLab = ([l, a, b]) => `lab(${l},${a},${b})`;
  const parseLch = ([l, c, h]) => `lch(${l},${c},${h})`;
  const removeCharacters = (value, colorType) => {
    return value.replace(/\s/g, "").replace(colorType, "").replace("(", "").replace(")", "");
  };
  const handleNoMatch = () => {
    setHex("");
    setRgb([0, 0, 0]);
    setHsl([0, 0, 0]);
    setHsv([0, 0, 0]);
    setCmyk([0, 0, 0, 0]);
    setHtml(null);
    setLab([0, 0, 0]);
    setLch([0, 0, 0]);
  };
  const handleHex = (value) => {
    try {
      setHex(value);
      setRgb(colorConvert.hex.rgb(value));
      setHsl(colorConvert.hex.hsl(value));
      setHsv(colorConvert.hex.hsv(value));
      setCmyk(colorConvert.hex.cmyk(value));
      setHtml(colorConvert.hex.keyword(value));
      setLab(colorConvert.hex.lab(value));
      setLch(colorConvert.hex.lch(value));
    } catch (error) {
      handleNoMatch();
    }
  };
  const handleRgb = (value) => {
    const values = removeCharacters(value, "rgb").split(",").map((val) => parseInt(val, 10));
    try {
      setHex(`#${colorConvert.rgb.hex(values)}`);
      setRgb(values);
      setHsl(colorConvert.rgb.hsl(values));
      setHsv(colorConvert.rgb.hsv(values));
      setCmyk(colorConvert.rgb.cmyk(values));
      setHtml(colorConvert.rgb.keyword(values));
      setLab(colorConvert.rgb.lab(values));
      setLch(colorConvert.rgb.lch(values));
    } catch (error) {
      handleNoMatch();
    }
  };
  const handleHsl = (value) => {
    const values = removeCharacters(value, "hsl").split(",").map((val) => parseInt(val, 10));
    try {
      setHex(`#${colorConvert.hsl.hex(values)}`);
      setRgb(colorConvert.hsl.rgb(values));
      setHsl(values);
      setHsv(colorConvert.hsl.hsv(values));
      setCmyk(colorConvert.hsl.cmyk(values));
      setHtml(colorConvert.hsl.keyword(values));
      setLab(colorConvert.hsl.lab(values));
      setLch(colorConvert.hsl.lch(values));
    } catch (error) {
      handleNoMatch();
    }
  };
  const handleHsv = (value) => {
    const values = removeCharacters(value, "hsv").split(",").map((val) => parseInt(val, 10));
    try {
      setHex(`#${colorConvert.hsv.hex(values)}`);
      setRgb(colorConvert.hsv.rgb(values));
      setHsl(colorConvert.hsv.hsl(values));
      setHsv(values);
      setCmyk(colorConvert.hsv.cmyk(values));
      setHtml(colorConvert.hsv.keyword(values));
      setLab(colorConvert.hsv.lab(values));
      setLch(colorConvert.hsv.lch(values));
    } catch (error) {
      handleNoMatch();
    }
  };
  const handleCmyk = (value) => {
    const values = removeCharacters(value, "cmyk").split(",").map((val) => parseInt(val, 10));
    try {
      setHex(`#${colorConvert.cmyk.hex(values)}`);
      setRgb(colorConvert.cmyk.rgb(values));
      setHsl(colorConvert.cmyk.hsl(values));
      setHsv(colorConvert.cmyk.hsv(values));
      setCmyk(values);
      setHtml(colorConvert.cmyk.keyword(values));
      setLab(colorConvert.cmyk.lab(values));
      setLch(colorConvert.cmyk.lch(values));
    } catch (error) {
      handleNoMatch();
    }
  };
  const handleLab = (value) => {
    const values = removeCharacters(value, "lab").split(",").map((val) => parseInt(val, 10));
    try {
      setHex(`#${colorConvert.lab.hex(values)}`);
      setRgb(colorConvert.lab.rgb(values));
      setHsl(colorConvert.lab.hsl(values));
      setHsv(colorConvert.lab.hsv(values));
      setLab(values);
      setLch(colorConvert.lab.lch(values));
      setHtml(colorConvert.lab.keyword(values));
    } catch (error) {
      handleNoMatch();
    }
  };
  const handleLch = (value) => {
    const values = removeCharacters(value, "lch").split(",").map((val) => parseInt(val, 10));
    try {
      setHex(`#${colorConvert.lch.hex(values)}`);
      setRgb(colorConvert.lch.rgb(values));
      setHsl(colorConvert.lch.hsl(values));
      setHsv(colorConvert.lch.hsv(values));
      setLab(colorConvert.lch.lab(values));
      setLch(values);
      setHtml(colorConvert.lch.keyword(values));
    } catch (error) {
      handleNoMatch();
    }
  };
  const handleHtml = (value) => {
    try {
      setHex(`#${colorConvert.keyword.hex(value)}`);
      setRgb(colorConvert.keyword.rgb(value));
      setHsl(colorConvert.keyword.hsl(value));
      setHsv(colorConvert.keyword.hsv(value));
      setCmyk(colorConvert.keyword.cmyk(value));
      setHtml(value);
      setLab(colorConvert.keyword.lab(value));
      setLch(colorConvert.keyword.lch(value));
    } catch (error) {
      handleNoMatch();
    }
  };
  const handleChange = (value) => {
    setInput(value);
    const colorType = getColorType(value);
    switch (colorType) {
      case "HEX" /* Hex */:
        handleHex(value);
        break;
      case "RGB" /* Rgb */:
        handleRgb(value);
        break;
      case "HSL" /* Hsl */:
        handleHsl(value);
        break;
      case "HSV" /* Hsv */:
        handleHsv(value);
        break;
      case "CMYK" /* Cmyk */:
        handleCmyk(value);
        break;
      case "HTML" /* Html */:
        handleHtml(value);
        break;
      case "LAB" /* Lab */:
        handleLab(value);
        break;
      case "LCH" /* Lch */:
        handleLch(value);
        break;
      default:
        setHex("");
        setRgb([0, 0, 0]);
        setHsl([0, 0, 0]);
        setHsv([0, 0, 0]);
        setCmyk([0, 0, 0, 0]);
        setHtml(null);
        setLab([0, 0, 0]);
        setLch([0, 0, 0]);
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12, lg: 6 }, /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, /* @__PURE__ */ React.createElement(PasteFromClipboardButton, { setInput: (v) => handleChange(v) }), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: () => handleChange("") }), /* @__PURE__ */ React.createElement(SampleButton, { setInput: handleChange, sample })), /* @__PURE__ */ React.createElement(
    TextField,
    {
      id: "input",
      name: "input",
      label: t("tool.color-convert.inputLabel"),
      value: getInputStr(),
      className: classes.fullWidth,
      onChange: (e) => handleChange(e.target.value),
      variant: "outlined"
    }
  ))), /* @__PURE__ */ React.createElement(Divider, { style: { marginTop: "1rem", marginBottom: "1rem" } }), /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(Grid, { item: true, lg: 6, md: 8, xs: 12 }, /* @__PURE__ */ React.createElement(OutputField, { label: "Hex", value: hex }), /* @__PURE__ */ React.createElement(OutputField, { label: "RGB", value: parseRgb(rgb) }), /* @__PURE__ */ React.createElement(OutputField, { label: "HSL", value: parseHsl(hsl) }), /* @__PURE__ */ React.createElement(OutputField, { label: "HSV", value: parseHsv(hsv) }), /* @__PURE__ */ React.createElement(OutputField, { label: "CMYK", value: parseCmyk(cmyk) }), /* @__PURE__ */ React.createElement(OutputField, { label: "HTML", value: html }), /* @__PURE__ */ React.createElement(OutputField, { label: "Lab", value: parseLab(lab) }), /* @__PURE__ */ React.createElement(OutputField, { label: "lch", value: parseLch(lch) })), /* @__PURE__ */ React.createElement(Grid, { item: true, lg: 6, md: 4, xs: 12 }, /* @__PURE__ */ React.createElement(Box, { bgcolor: hex, style: { height: "50vh" } })))));
};

export { ColorConverter, ColorConverter as default };
//# sourceMappingURL=ColorConverter.esm.js.map
