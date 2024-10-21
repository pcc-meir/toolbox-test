import React, { useState, useEffect } from 'react';
import { useStyles } from '../../utils/hooks.esm.js';
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
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const UrlExploder = () => {
  const [url, setUrl] = useState(null);
  const [rawInput, setRawInput] = useState("");
  const [protocol, setProtocol] = useState("");
  const [host, setHost] = useState("");
  const [path, setPath] = useState("");
  const [port, setPort] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState("");
  const { classes } = useStyles();
  const { t } = useToolboxTranslation();
  const onInput = (value) => {
    setRawInput(value);
    try {
      const newUrl = new URL(value);
      setUrl(newUrl);
    } catch (e) {
    }
  };
  useEffect(() => {
    if (url) {
      setProtocol(url.protocol);
      setHost(url.hostname);
      setPath(url.pathname);
      setUsername(url.username);
      setPort(url.port);
      setPassword(url.password);
      setHash(url.hash);
      setOrigin(url.origin);
      let q = "";
      url.searchParams.forEach((value, key) => {
        q += `${key}=${value}
`;
      });
      setQuery(q);
    }
  }, [url]);
  useEffect(() => {
    try {
      const newUrl = new URL("http://localhost");
      newUrl.host = host;
      newUrl.protocol = protocol;
      newUrl.pathname = path;
      newUrl.username = username;
      newUrl.port = port;
      newUrl.password = password;
      newUrl.hash = hash;
      const params = new URLSearchParams();
      query.split("\n").forEach((q) => {
        const parts = q.split("=");
        if (parts.length === 2) {
          params.append(parts[0], parts[1]);
        }
      });
      newUrl.search = params.toString();
      setOrigin(newUrl.origin);
      setRawInput(newUrl.toString());
    } catch (e) {
    }
  }, [protocol, host, path, username, port, password, hash, query]);
  return /* @__PURE__ */ React.createElement(Grid, { container: true }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12 }, /* @__PURE__ */ React.createElement(SampleButton, { setInput: onInput, sample: faker.internet.url() }), /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: onInput }), /* @__PURE__ */ React.createElement(
    PasteFromClipboardButton,
    {
      title: t("tool.url-exploder.pasteFromClipboard"),
      setInput: onInput
    }
  ), rawInput && /* @__PURE__ */ React.createElement(
    CopyToClipboardButton,
    {
      title: t("tool.url-exploder.copyToClipboard"),
      output: rawInput
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: "URL",
      variant: "outlined",
      className: classes.fullWidth,
      value: rawInput,
      onChange: (e) => onInput(e.target.value),
      style: { marginTop: "10px", marginBottom: "10px" }
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 6 }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.protocolLabel"),
      className: classes.fullWidth,
      value: protocol,
      style: { marginBottom: "10px" },
      onChange: (e) => setProtocol(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.pathLabel"),
      className: classes.fullWidth,
      value: path,
      style: { marginBottom: "10px" },
      onChange: (e) => setPath(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.usernameLabel"),
      className: classes.fullWidth,
      value: username,
      style: { marginBottom: "10px" },
      onChange: (e) => setUsername(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.queryLabel"),
      className: classes.fullWidth,
      value: query,
      multiline: true,
      minRows: 10,
      style: { marginBottom: "10px" },
      onChange: (e) => setQuery(e.target.value),
      helperText: t("tool.url-exploder.queryHelperText")
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 6 }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.hostLabel"),
      className: classes.fullWidth,
      value: host,
      style: { marginBottom: "10px" },
      onChange: (e) => setHost(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.portLabel"),
      className: classes.fullWidth,
      type: "number",
      value: port,
      style: { marginBottom: "10px" },
      onChange: (e) => setPort(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.passwordLabel"),
      className: classes.fullWidth,
      value: password,
      style: { marginBottom: "10px" },
      onChange: (e) => setPassword(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.hashLabel"),
      className: classes.fullWidth,
      value: hash,
      style: { marginBottom: "10px" },
      onChange: (e) => setHash(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.url-exploder.originLabel"),
      className: classes.fullWidth,
      value: origin,
      InputProps: {
        readOnly: true
      },
      style: { marginBottom: "10px" }
    }
  )));
};

export { UrlExploder as default };
//# sourceMappingURL=UrlExploder.esm.js.map
