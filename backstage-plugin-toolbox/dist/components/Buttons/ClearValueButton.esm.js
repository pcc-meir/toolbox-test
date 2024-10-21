import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Clear from '@mui/icons-material/Clear';
import { useToolboxTranslation } from '../../hooks.esm.js';

const ClearValueButton = (props) => {
  const { t } = useToolboxTranslation();
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      arrow: true,
      title: props.tooltip ? props.tooltip : t("components.clearValueButton.tooltipTitle")
    },
    /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "small",
        startIcon: /* @__PURE__ */ React.createElement(Clear, null),
        onClick: () => props.setValue(""),
        variant: "text",
        color: "inherit"
      },
      t("components.clearValueButton.buttonText")
    )
  );
};

export { ClearValueButton };
//# sourceMappingURL=ClearValueButton.esm.js.map
