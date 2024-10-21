import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { useToolboxTranslation } from '../../hooks.esm.js';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      minWidth: 275
    },
    title: {
      fontSize: "14px !important"
    },
    card: {
      cursor: "pointer",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "transparent",
      height: "100%",
      "&:hover": {
        borderColor: theme.palette.primary.light
      }
    },
    textBlock: {
      marginTop: "1rem !important"
    }
  };
});
const WelcomePage = (props) => {
  const { tools } = props;
  const { classes } = useStyles();
  const { t } = useToolboxTranslation();
  return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, { className: classes.textBlock }, t("welcomePage.introText")), /* @__PURE__ */ React.createElement(Typography, { className: classes.textBlock }, t("welcomePage.secondText")), /* @__PURE__ */ React.createElement(
    Grid,
    {
      container: true,
      className: classes.textBlock,
      sx: { p: 0, mx: "-8px", mb: "-8px" },
      alignContent: "center"
    },
    tools.map((tool) => {
      return /* @__PURE__ */ React.createElement(
        Grid,
        {
          item: true,
          key: tool.id,
          xs: 3,
          sx: { p: "8px", pt: "8px !important", pl: "8px !important" }
        },
        /* @__PURE__ */ React.createElement(
          Card,
          {
            onClick: () => window.location.hash = tool.id,
            className: classes.card
          },
          /* @__PURE__ */ React.createElement(CardContent, { sx: { p: "16px", pb: "16px !important" } }, /* @__PURE__ */ React.createElement(
            Typography,
            {
              className: classes.title,
              color: "textSecondary",
              gutterBottom: true
            },
            t(
              `tool.category.${(tool.category ?? "miscellaneous").toLowerCase()}`,
              {
                defaultValue: tool.category ?? "Miscellaneous"
              }
            )
          ), /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, t(`tool.${tool.id}.name`, { defaultValue: tool.name })), /* @__PURE__ */ React.createElement(Typography, { variant: "body2", component: "p" }, t(`tool.${tool.id}.description`, {
            defaultValue: tool.description
          })))
        )
      );
    })
  ));
};

export { WelcomePage };
//# sourceMappingURL=WelcomePage.esm.js.map
