import React, { Suspense } from 'react';
import { defaultTools } from './tools.esm.js';
import { useParams } from 'react-router-dom';
import { ContentHeader } from '@backstage/core-components';
import { useStyles } from '../../utils/hooks.esm.js';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useToolboxTranslation } from '../../hooks.esm.js';

const ToolPage = (props) => {
  const { extraTools } = props;
  const params = useParams();
  const { classes } = useStyles();
  const { t } = useToolboxTranslation();
  const allTools = [...extraTools ?? [], ...defaultTools];
  const tool = allTools.find(({ id }) => id === params.id);
  if (!tool) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, t("toolPage.toolNotAvailable"));
  }
  const title = `${t(
    `tool.category.${(tool.category ?? "miscellaneous").toLowerCase()}`,
    {
      defaultValue: tool.category ?? "Miscellaneous"
    }
  )} - ${t(`tool.${tool.id}.name`, {
    defaultValue: tool.name
  })}`;
  const description = t(`tool.${tool.id}.description`, {
    defaultValue: tool.description
  });
  return /* @__PURE__ */ React.createElement("div", { id: "toolContainer", className: classes.toolContainer }, /* @__PURE__ */ React.createElement(
    Suspense,
    {
      fallback: /* @__PURE__ */ React.createElement(
        Box,
        {
          display: "flex",
          width: "100%",
          height: "50%",
          alignItems: "center",
          justifyContent: "center"
        },
        /* @__PURE__ */ React.createElement(CircularProgress, null)
      )
    },
    /* @__PURE__ */ React.createElement(ContentHeader, { title, description }, tool.headerButtons),
    tool.component
  ));
};

export { ToolPage };
//# sourceMappingURL=ToolPage.esm.js.map
