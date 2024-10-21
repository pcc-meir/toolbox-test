import React, { useState } from 'react';
import { useApi } from '@backstage/core-plugin-api';
import { toolboxApiRef } from '../../api/ToolboxApi.esm.js';
import { useStyles } from '../../utils/hooks.esm.js';
import { Progress } from '@backstage/core-components';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useToolboxTranslation } from '../../hooks.esm.js';

const Whois = () => {
  const [domain, setDomain] = useState("");
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const toolboxApi = useApi(toolboxApiRef);
  const { classes } = useStyles();
  const { t } = useToolboxTranslation();
  const lookup = () => {
    setResponse({});
    if (domain) {
      setLoading(true);
      toolboxApi.toolJsonRequest("whois", {
        domain
      }).then((data) => {
        setLoading(false);
        setResponse(data);
      });
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 2, alignItems: "center" }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.whois.domainInput"),
      variant: "outlined",
      style: { width: "20rem" },
      value: domain,
      onChange: (e) => {
        setDomain(e.target.value);
      }
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(Button, { variant: "contained", color: "primary", onClick: lookup }, t("tool.whois.lookupButton"))), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "outlined",
      onClick: () => {
        setDomain("google.com");
      }
    },
    t("tool.whois.exampleButton")
  ))), loading && /* @__PURE__ */ React.createElement(Progress, null), Object.keys(response).length > 0 && /* @__PURE__ */ React.createElement(Grid, { style: { marginTop: "1rem" } }, Object.entries(response).map(([key, value]) => {
    return /* @__PURE__ */ React.createElement(
      TextField,
      {
        key,
        label: key,
        id: "output",
        multiline: true,
        className: classes.fullWidth,
        value: Object.entries(value).map(([k, v]) => `${k}: ${v}`).join("\n"),
        inputProps: {
          style: { resize: "vertical" }
        },
        style: { marginBottom: "1rem" },
        minRows: 30,
        variant: "outlined"
      }
    );
  })));
};

export { Whois as default };
//# sourceMappingURL=Whois.esm.js.map
