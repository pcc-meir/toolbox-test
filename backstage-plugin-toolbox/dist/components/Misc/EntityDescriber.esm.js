import { useApi } from '@backstage/core-plugin-api';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import React, { useEffect } from 'react';
import '@mui/material/Tooltip';
import '@mui/material/Button';
import '@mui/icons-material/Clear';
import { useToolboxTranslation } from '../../hooks.esm.js';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton.esm.js';
import { useStyles } from '../../utils/hooks.esm.js';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import '@mui/icons-material/AssignmentReturned';
import '@mui/icons-material/Input';
import '@mui/icons-material/AttachFile';
import YAML from 'yaml';
import { FileDownloadButton } from '../Buttons/FileDownloadButton.esm.js';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const EntityDescriber = () => {
  const catalogApi = useApi(catalogApiRef);
  const { classes } = useStyles();
  const [entity, setEntity] = React.useState(null);
  const [output, setOutput] = React.useState("");
  const [availableEntities, setAvailableEntities] = React.useState([]);
  const { t } = useToolboxTranslation();
  useEffect(() => {
    catalogApi.getEntities().then((data) => {
      if (data) {
        setAvailableEntities(data.items);
      }
    });
  }, [catalogApi]);
  useEffect(() => {
    if (entity) {
      setOutput(YAML.stringify(entity));
    } else {
      setOutput("");
    }
  }, [entity]);
  const getEntityTitle = (ent) => {
    if (ent.metadata.title) {
      return ent.metadata.title;
    }
    return ent.metadata.name.split(/[_.-]+/).map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join(" ");
  };
  return /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 4, style: { marginBottom: "5px" } }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(ButtonGroup, { size: "small" }, output && /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output }), output && /* @__PURE__ */ React.createElement(
    FileDownloadButton,
    {
      content: output,
      fileName: "catalog-info.yaml",
      fileType: "catalog-info.yaml"
    }
  )))), /* @__PURE__ */ React.createElement(Grid, { container: true, className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4, lg: 3 }, /* @__PURE__ */ React.createElement(
    Autocomplete,
    {
      className: classes.fullWidth,
      options: availableEntities ?? [],
      getOptionLabel: (option) => getEntityTitle(option),
      groupBy: (option) => option.kind,
      value: entity,
      onChange: (_e, value) => setEntity(value),
      renderInput: (params) => /* @__PURE__ */ React.createElement(
        TextField,
        {
          ...params,
          label: t("tool.entity-describer.entityLabel"),
          variant: "outlined"
        }
      )
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 8, lg: 9 }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      id: "output",
      label: t("tool.entity-describer.outputLabel"),
      value: output || "",
      className: classes.fullWidth,
      multiline: true,
      minRows: 20,
      maxRows: 50,
      variant: "outlined"
    }
  ))));
};

export { EntityDescriber, EntityDescriber as default };
//# sourceMappingURL=EntityDescriber.esm.js.map
