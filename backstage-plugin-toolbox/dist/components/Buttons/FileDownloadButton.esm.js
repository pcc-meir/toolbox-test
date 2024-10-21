import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { useToolboxTranslation } from '../../hooks.esm.js';

const FileDownloadButton = (props) => {
  const { content, fileName, fileType } = props;
  const { t } = useToolboxTranslation();
  const download = () => {
    const link = document.createElement("a");
    const file = new Blob([content], { type: fileType });
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
  };
  return /* @__PURE__ */ React.createElement(Tooltip, { title: t("components.fileDownloadButton.tooltipTitle"), arrow: true }, /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "small",
      startIcon: /* @__PURE__ */ React.createElement(GetAppIcon, null),
      onClick: download,
      variant: "text",
      color: "inherit"
    },
    t("components.fileDownloadButton.buttonText")
  ));
};

export { FileDownloadButton };
//# sourceMappingURL=FileDownloadButton.esm.js.map
