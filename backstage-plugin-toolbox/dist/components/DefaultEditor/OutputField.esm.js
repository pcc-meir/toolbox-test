import React from 'react';
import '@mui/material/Tooltip';
import '@mui/material/Button';
import '@mui/icons-material/Clear';
import '../../api/ToolboxApi.esm.js';
import '@backstage/core-plugin-api';
import 'react-use/lib/useAsync';
import '@backstage/core-plugin-api/alpha';
import '../../translation.esm.js';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton.esm.js';
import { useStyles } from '../../utils/hooks.esm.js';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import '@mui/icons-material/AssignmentReturned';
import '@mui/icons-material/Input';
import '@mui/icons-material/AttachFile';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const OutputField = (props) => {
  const { classes } = useStyles();
  const { label, value } = props;
  return /* @__PURE__ */ React.createElement(Box, { sx: { pt: "1rem" } }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label,
      className: classes.fullWidth,
      disabled: true,
      value: value ?? ""
    }
  ), /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output: value ?? "" }));
};

export { OutputField };
//# sourceMappingURL=OutputField.esm.js.map
