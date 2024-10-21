import React from 'react';
import 'react-router-dom';
import '@backstage/core-components';
import '../../utils/hooks.esm.js';
import '@mui/icons-material/Search';
import { defaultTools } from '../Root/tools.esm.js';
import '@mui/icons-material/OpenInNew';
import '@mui/material/Tooltip';
import '@mui/material/Button';
import '@mui/icons-material/Clear';
import { useToolboxTranslation } from '../../hooks.esm.js';
import '@mui/icons-material/FileCopy';
import '@backstage/core-plugin-api';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import '@mui/icons-material/AssignmentReturned';
import '@mui/icons-material/Input';
import '@mui/icons-material/AttachFile';
import '../WelcomePage/WelcomePage.esm.js';
import '@mui/material/Tab';
import '@mui/material/Grid';
import '@mui/material/InputBase';
import '@mui/material/Paper';
import '@mui/material/IconButton';
import '@mui/material/Tabs';
import '@mui/material/Box';
import '@mui/material/CircularProgress';
import '@mui/lab/TabPanel';
import '@mui/lab/TabContext';
import Typography from '@mui/material/Typography';

const Content = (props) => {
  const { t: intl } = useToolboxTranslation();
  const tool = defaultTools.find((t) => t.id === props?.toolId);
  if (!tool) {
    return /* @__PURE__ */ React.createElement(Typography, { variant: "h4" }, intl("components.homePageCard.selectToolText"));
  }
  return tool.component;
};

export { Content };
//# sourceMappingURL=Content.esm.js.map
