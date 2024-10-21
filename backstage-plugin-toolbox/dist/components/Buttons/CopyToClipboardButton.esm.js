import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import FileCopy from '@mui/icons-material/FileCopy';
import { useToolboxTranslation } from '../../hooks.esm.js';
import { useApi, alertApiRef } from '@backstage/core-plugin-api';

const CopyToClipboardButton = (props) => {
  const { t } = useToolboxTranslation();
  const alertApi = useApi(alertApiRef);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.output.toString()).then(() => {
      alertApi.post({ message: "Copied to clipboard!", severity: "success" });
    }).catch(() => {
      alertApi.post({
        message: "Failed to copy to clipboard!",
        severity: "error"
      });
    });
  };
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      arrow: true,
      title: props.title ?? t("components.copyToClipboardButton.tooltipTitle")
    },
    /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "small",
        startIcon: /* @__PURE__ */ React.createElement(FileCopy, null),
        onClick: copyToClipboard,
        variant: "text",
        color: "inherit"
      },
      t("components.copyToClipboardButton.buttonText")
    )
  );
};

export { CopyToClipboardButton };
//# sourceMappingURL=CopyToClipboardButton.esm.js.map
