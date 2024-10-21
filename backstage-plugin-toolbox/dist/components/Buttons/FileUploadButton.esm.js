import React from 'react';
import AttachFile from '@mui/icons-material/AttachFile';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { useToolboxTranslation } from '../../hooks.esm.js';

const FileUploadButton = (props) => {
  const { t } = useToolboxTranslation();
  const {
    onFileLoad,
    id = "uploadBtn",
    buttonText = t("components.fileUploadButton.buttonText"),
    accept = "*/*"
  } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tooltip, { arrow: true, title: t("components.fileUploadButton.tooltipTitle") }, /* @__PURE__ */ React.createElement("label", { htmlFor: id }, /* @__PURE__ */ React.createElement(
    Button,
    {
      component: "span",
      size: "small",
      startIcon: /* @__PURE__ */ React.createElement(AttachFile, null),
      variant: "text",
      color: "inherit"
    },
    buttonText
  ))), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "file",
      accept,
      id,
      hidden: true,
      onChange: (e) => {
        if (!e?.target?.files?.length) {
          return null;
        }
        return onFileLoad(e.target.files[0]);
      }
    }
  ));
};

export { FileUploadButton };
//# sourceMappingURL=FileUploadButton.esm.js.map
