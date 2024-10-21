import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import { useToolboxTranslation } from '../../hooks.esm.js';

const PasteFromClipboardButton = (props) => {
  const { t } = useToolboxTranslation();
  const pasteFromClipboard = () => {
    navigator.clipboard.readText().then(
      (text) => props.setInput(text)
      // TODO: handle error
    );
  };
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      arrow: true,
      title: props.title ?? t("components.pasteFromClipboardButton.tooltipTitle")
    },
    /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "small",
        startIcon: /* @__PURE__ */ React.createElement(AssignmentReturnedIcon, null),
        onClick: pasteFromClipboard,
        variant: "text",
        color: "inherit"
      },
      t("components.pasteFromClipboardButton.buttonText")
    )
  );
};

export { PasteFromClipboardButton };
//# sourceMappingURL=PasteFromClipboardButton.esm.js.map
