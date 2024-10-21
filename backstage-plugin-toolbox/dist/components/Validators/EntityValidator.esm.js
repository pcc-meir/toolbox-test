import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { validate } from '@roadiehq/roadie-backstage-entity-validator';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useToolboxTranslation } from '../../hooks.esm.js';

const EntityValidator = () => {
  const { t } = useToolboxTranslation();
  const [output, setOutput] = React.useState(
    /* @__PURE__ */ React.createElement(Alert, { severity: "info" }, t("tool.entity-validator.alertEmptyValue"))
  );
  const [input, setInput] = React.useState("");
  const sample = "apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: artist-web\n  description: The place to be, for great artists\n  labels:\n    example.com/custom: custom_label_value\n  annotations:\n    example.com/service-discovery: artistweb\n    circleci.com/project-slug: github/example-org/artist-website\n  tags:\n    - java\n  links:\n    - url: https://admin.example-org.com\n      title: Admin Dashboard\n      icon: dashboard\n      type: admin-dashboard\nspec:\n  type: website\n  lifecycle: production\n  owner: artist-relations-team\n  system: public-websites";
  const formatError = (err) => {
    let msg = err.message;
    msg = msg.replace(
      /TypeError: Cannot read properties of undefined \(reading 'namespace'\)/,
      "Must have required property: 'metadata' - missingProperty: 'metadata'"
    ).replace(/TypeError: (.*)/, "$1").replace(/YAMLException: (.*)/, "YAML error: $1").replaceAll("|", "<br>");
    return msg;
  };
  useEffect(() => {
    if (!input) {
      setOutput(
        /* @__PURE__ */ React.createElement(Alert, { severity: "info" }, t("tool.entity-validator.alertEmptyValue"))
      );
      return;
    }
    validate(input, true).then(() => {
      setOutput(
        /* @__PURE__ */ React.createElement(Alert, { severity: "success" }, /* @__PURE__ */ React.createElement(AlertTitle, null, t("tool.entity-validator.alertSuccessTitle")), t("tool.entity-validator.alertValidEntity"))
      );
    }).catch((err) => {
      setOutput(
        /* @__PURE__ */ React.createElement(Alert, { severity: "error" }, /* @__PURE__ */ React.createElement(AlertTitle, null, t("tool.entity-validator.alertErrorTitle")), /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: formatError(err) } }))
      );
    });
  }, [input, t]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      sample,
      rightContent: /* @__PURE__ */ React.createElement(React.Fragment, null, output),
      allowFileUpload: true,
      inputLabel: t("tool.entity-validator.inputLabel"),
      acceptFileTypes: ".yaml,.yml",
      allowFileDownload: true,
      downloadFileName: "catalog-info.yaml",
      downloadFileType: "application/yaml"
    }
  );
};

export { EntityValidator, EntityValidator as default };
//# sourceMappingURL=EntityValidator.esm.js.map
