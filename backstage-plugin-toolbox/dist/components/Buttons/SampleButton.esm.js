import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Input from '@mui/icons-material/Input';
import { useToolboxTranslation } from '../../hooks.esm.js';

const SampleButton = (props) => {
  const { t } = useToolboxTranslation();
  return /* @__PURE__ */ React.createElement(Tooltip, { arrow: true, title: t("components.sampleButton.tooltipTitle") }, /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "small",
      startIcon: /* @__PURE__ */ React.createElement(Input, null),
      onClick: () => props.setInput(props.sample),
      variant: "text",
      color: "inherit"
    },
    t("components.sampleButton.buttonText")
  ));
};

export { SampleButton };
//# sourceMappingURL=SampleButton.esm.js.map
