import React, { useEffect, useMemo, Suspense } from 'react';
import { Page, Header, Content, ContentHeader } from '@backstage/core-components';
import { useFavoriteStorage, useStyles } from '../../utils/hooks.esm.js';
import SearchIcon from '@mui/icons-material/Search';
import { defaultTools } from './tools.esm.js';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import '@mui/icons-material/Clear';
import { useBackendTools, useToolboxTranslation } from '../../hooks.esm.js';
import '@mui/icons-material/FileCopy';
import { useAnalytics } from '@backstage/core-plugin-api';
import { FavoriteButton } from '../Buttons/FavoriteButton.esm.js';
import '@mui/icons-material/AssignmentReturned';
import '@mui/icons-material/Input';
import '@mui/icons-material/AttachFile';
import { useLocation, useNavigate } from 'react-router-dom';
import { WelcomePage } from '../WelcomePage/WelcomePage.esm.js';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

const tabProps = (index) => {
  return {
    id: `toolbox-tab-${index}`,
    "aria-controls": `toolbox-tabpanel-${index}`
  };
};
const ToolsPage = (props) => {
  const {
    extraTools,
    tools,
    categorySortFunction,
    toolSortFunction,
    welcomePage,
    toolFilterFunction
  } = props;
  const { hash } = useLocation();
  const navigate = useNavigate();
  const analytics = useAnalytics();
  const [value, setValue] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const backendTools = useBackendTools();
  const favorites = useFavoriteStorage();
  const { classes } = useStyles();
  const { t } = useToolboxTranslation();
  const openToolInWindow = (id) => {
    window.open(`/toolbox/tool/${id}`, "newwindow", "width=1000,height=800");
    return false;
  };
  useEffect(() => {
    if (value === 0) {
      setValue(1);
    }
  }, [value]);
  const tabs = useMemo(() => {
    const tabInfos = [];
    const favoritesCategory = t("tool.category.favorites");
    const shownTools = tools ? tools : [...extraTools ?? [], ...defaultTools];
    const filteredTools = shownTools.filter(
      (tool) => tool.requiresBackend === true && backendTools.includes(tool.id) || tool.requiresBackend !== true
    ).filter((tool) => toolFilterFunction?.(tool) ?? true);
    const allTools = filteredTools.map((tool) => {
      if (favorites.includes(tool.id)) {
        return { ...tool, category: favoritesCategory };
      }
      return tool;
    }).sort((a, b) => {
      const aCategoryStr = t(
        `tool.category.${(a.category ?? "miscellaneous").toLowerCase()}`,
        {
          defaultValue: a.category ?? "Miscellaneous"
        }
      );
      const bCategoryStr = t(
        `tool.category.${(b.category ?? "miscellaneous").toLowerCase()}`,
        {
          defaultValue: b.category ?? "Miscellaneous"
        }
      );
      if (aCategoryStr === favoritesCategory) {
        return -1;
      } else if (bCategoryStr === favoritesCategory) {
        return 1;
      }
      return (aCategoryStr ?? "").localeCompare(bCategoryStr ?? "");
    });
    tabInfos.push({
      tab: /* @__PURE__ */ React.createElement(
        Tab,
        {
          key: "Toolbox",
          label: "",
          disabled: true,
          className: classes.tabDivider,
          style: { minHeight: "2px" }
        }
      ),
      component: void 0,
      id: "toolbox",
      localizedTitle: ""
    });
    tabInfos.push({
      id: "",
      tab: /* @__PURE__ */ React.createElement(
        Tab,
        {
          key: "toolbox",
          wrapped: true,
          className: `${classes.fullWidth} ${classes.noPadding} ${classes.tab}`,
          label: t("toolsPage.tabPanel.mainLabel")
        }
      ),
      localizedTitle: t("toolsPage.pageTitle"),
      component: welcomePage || /* @__PURE__ */ React.createElement(WelcomePage, { tools: allTools }),
      showFavoriteButton: false,
      showOpenInNewWindowButton: false
    });
    const categories = allTools.reduce(
      (ctgs, tool) => {
        const categoryStr = t(
          `tool.category.${(tool.category ?? "miscellaneous").toLowerCase()}`,
          {
            defaultValue: tool.category ?? "Miscellaneous"
          }
        );
        const toolList = ctgs[categoryStr] || [];
        toolList.push(tool);
        ctgs[categoryStr] = toolList;
        return ctgs;
      },
      {}
    );
    const matchesSearch = (tool) => {
      if (!search) {
        return true;
      }
      const toolName = t(`tool.${tool.id}.name`, { defaultValue: tool.name });
      const description = t(`tool.${tool.id}.description`, {
        defaultValue: tool.description
      });
      return toolName.toLowerCase().includes(search.toLowerCase()) || tool.id.toLowerCase().includes(search.toLowerCase()) || tool.aliases?.some(
        (alias) => alias.toLowerCase().includes(search.toLowerCase())
      ) || description?.toLowerCase().includes(search.toLowerCase());
    };
    Object.entries(categories).sort(([a, _], [b, __]) => {
      if (categorySortFunction) {
        return categorySortFunction(a, b);
      } else if (a === favoritesCategory) {
        return -1;
      } else if (b === favoritesCategory) {
        return 1;
      }
      return a.localeCompare(b);
    }).map(([category, categoryTools]) => {
      const anyMatchSearch = categoryTools.some((tool) => matchesSearch(tool));
      tabInfos.push({
        tab: /* @__PURE__ */ React.createElement(
          Tab,
          {
            style: !anyMatchSearch ? { display: "none" } : {},
            key: category,
            label: category,
            disabled: true,
            className: classes.tabDivider
          }
        ),
        component: void 0,
        id: category,
        localizedTitle: ""
      });
      categoryTools.sort((a, b) => {
        if (toolSortFunction) {
          return toolSortFunction(a, b);
        }
        return a.name.localeCompare(b.name);
      }).map((tool, i) => {
        tabInfos.push({
          tab: /* @__PURE__ */ React.createElement(
            Tab,
            {
              key: tool.name,
              style: !matchesSearch(tool) ? { display: "none" } : {},
              wrapped: true,
              className: `${classes.fullWidth} ${classes.noPadding} ${classes.tab}`,
              label: t(`tool.${tool.id}.name`, { defaultValue: tool.name }),
              ...tabProps(i)
            }
          ),
          localizedTitle: `${category} - ${t(`tool.${tool.id}.name`, {
            defaultValue: tool.name
          })}`,
          localizedDescription: t(`tool.${tool.id}.description`, {
            defaultValue: tool.description
          }),
          ...tool
        });
      });
    });
    return tabInfos;
  }, [
    favorites,
    search,
    classes,
    extraTools,
    tools,
    categorySortFunction,
    toolSortFunction,
    welcomePage,
    backendTools,
    toolFilterFunction,
    t
  ]);
  useEffect(() => {
    const idx = tabs.findIndex((tab) => tab.id === hash.slice(1));
    if (idx > -1) {
      setValue(idx);
    }
  }, [hash, value, tabs]);
  const handleChange = (_, newValue) => {
    const tab = tabs[newValue];
    if (tab) {
      analytics.captureEvent("click", tab.id, {
        attributes: { toolName: tab.localizedTitle }
      });
      navigate(`#${tab.id}`);
    }
  };
  return /* @__PURE__ */ React.createElement(Page, { themeId: "tool" }, /* @__PURE__ */ React.createElement(Header, { title: t("toolsPage.title") }), /* @__PURE__ */ React.createElement(Content, { className: classes.noPadding }, /* @__PURE__ */ React.createElement(
    Grid,
    {
      container: true,
      spacing: 2,
      direction: "row",
      className: `${classes.noMargin} ${classes.fullWidth} ${classes.noPadding}`
    },
    /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4, md: 3, lg: 2, className: classes.toolsBar }, /* @__PURE__ */ React.createElement(
      Paper,
      {
        component: "form",
        className: classes.search,
        sx: { justifyContent: "space-between" }
      },
      /* @__PURE__ */ React.createElement(
        InputBase,
        {
          placeholder: t("toolsPage.input.search"),
          inputProps: { "aria-label": "Search" },
          onChange: (e) => setSearch(e.target.value)
        }
      ),
      /* @__PURE__ */ React.createElement(
        IconButton,
        {
          disabled: true,
          "aria-label": "search",
          sx: { mr: "16px !important", pr: "0 !important" }
        },
        /* @__PURE__ */ React.createElement(SearchIcon, null)
      )
    ), /* @__PURE__ */ React.createElement(
      Tabs,
      {
        orientation: "vertical",
        variant: "scrollable",
        scrollButtons: "auto",
        indicatorColor: "primary",
        value,
        onChange: handleChange,
        "aria-label": "Tools selection",
        className: classes.menuTabs
      },
      tabs.map((tab) => tab.tab)
    )),
    /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 8, md: 9, lg: 10, style: { padding: "8px" } }, /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement(TabContext, { value: `toolbox-tabpanel-${value}` }, tabs.map((tool, i) => {
        if (!tool.localizedTitle) {
          return null;
        }
        return /* @__PURE__ */ React.createElement(TabPanel, { key: tool.id, value: `toolbox-tabpanel-${i}` }, /* @__PURE__ */ React.createElement(
          ContentHeader,
          {
            title: tool.localizedTitle,
            description: tool.localizedDescription
          },
          tool.headerButtons,
          tool.showOpenInNewWindowButton !== false && /* @__PURE__ */ React.createElement(
            Tooltip,
            {
              title: t("toolsPage.tabPanel.tooltipTitle"),
              arrow: true
            },
            /* @__PURE__ */ React.createElement(
              Button,
              {
                size: "small",
                onClick: () => openToolInWindow(tool.id),
                color: "inherit"
              },
              /* @__PURE__ */ React.createElement(OpenInNew, null)
            )
          ),
          tool.showFavoriteButton !== false && /* @__PURE__ */ React.createElement(FavoriteButton, { toolId: tool.id })
        ), tool.component);
      }))
    ))
  )));
};

export { ToolsPage };
//# sourceMappingURL=ToolsPage.esm.js.map
