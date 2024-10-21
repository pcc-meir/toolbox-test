import React, { useEffect } from 'react';
import * as IBAN from 'iban';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { OutputField } from '../DefaultEditor/OutputField.esm.js';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useToolboxTranslation } from '../../hooks.esm.js';

const IbanValidator = () => {
  const [input, setInput] = React.useState("");
  const [bban, setBban] = React.useState("");
  const [electronic, setElectronic] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);
  const { t } = useToolboxTranslation();
  useEffect(() => {
    let valid;
    try {
      valid = IBAN.isValid(input);
      setBban(IBAN.toBBAN(input));
      setElectronic(IBAN.electronicFormat(input));
    } catch (error) {
      valid = false;
    }
    setIsValid(valid);
  }, [input]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      minRows: 1,
      inputLabel: "IBAN",
      rightContent: /* @__PURE__ */ React.createElement(React.Fragment, null, !isValid && /* @__PURE__ */ React.createElement(Alert, { severity: "error" }, /* @__PURE__ */ React.createElement(AlertTitle, null, t("tool.iban.alertErrorTitle")), t("tool.iban.alertInvalidIBAN")), isValid && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(OutputField, { label: "BBAN", value: bban }), /* @__PURE__ */ React.createElement(OutputField, { label: "Electronic", value: electronic }))),
      sample: "BE68539007547034"
    }
  );
};

export { IbanValidator, IbanValidator as default };
//# sourceMappingURL=IbanValidator.esm.js.map
