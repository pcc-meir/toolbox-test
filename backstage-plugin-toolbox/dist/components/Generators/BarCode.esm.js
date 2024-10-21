import React from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { faker } from '@faker-js/faker';
import Barcode from 'react-barcode';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const formatOptions = [
  "CODE39",
  "CODE128",
  "CODE128A",
  "CODE128B",
  "CODE128C",
  "EAN13",
  "EAN8",
  "EAN5",
  "EAN2",
  "UPC",
  "UPCE",
  "ITF14",
  "ITF",
  "MSI",
  "MSI10",
  "MSI11",
  "MSI1010",
  "MSI1110",
  "pharmacode",
  "codabar",
  "GenericBarcode",
  void 0
];
const BarCodeGenerator = () => {
  const [input, setInput] = React.useState("");
  const [format, setFormat] = React.useState("CODE128");
  const sample = faker.number.bigInt().toString(10);
  const typeSelect = /* @__PURE__ */ React.createElement(
    Select,
    {
      label: "format",
      value: format,
      onChange: (val) => setFormat(val.target.value),
      variant: "standard"
    },
    formatOptions.map((opt) => /* @__PURE__ */ React.createElement(MenuItem, { value: opt }, opt))
  );
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      additionalTools: [typeSelect],
      sample,
      rightContent: /* @__PURE__ */ React.createElement(Barcode, { value: input, format })
    }
  );
};

export { BarCodeGenerator, BarCodeGenerator as default };
//# sourceMappingURL=BarCode.esm.js.map
