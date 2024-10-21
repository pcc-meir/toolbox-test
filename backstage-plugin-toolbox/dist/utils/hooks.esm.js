import { makeStyles } from 'tss-react/mui';
import React, { useEffect } from 'react';
import { FAVORITES_STORAGE } from '../components/Buttons/FavoriteButton.esm.js';

const useFavoriteStorage = () => {
  const [favorites, setFavorites] = React.useState([]);
  useEffect(() => {
    function checkFavorites() {
      const item = localStorage.getItem(FAVORITES_STORAGE);
      if (item) {
        try {
          setFavorites(JSON.parse(item));
        } catch (_) {
          setFavorites([]);
          localStorage.removeItem(FAVORITES_STORAGE);
        }
      }
    }
    checkFavorites();
    window.addEventListener(FAVORITES_STORAGE, checkFavorites);
    return () => {
      window.removeEventListener(FAVORITES_STORAGE, checkFavorites);
    };
  }, []);
  return favorites;
};
const useStyles = makeStyles()((theme) => {
  return {
    fullWidth: {
      width: "100%"
    },
    fullHeight: {
      height: "100%"
    },
    noPadding: {
      padding: "0 !important"
    },
    noMargin: {
      margin: "0 !important"
    },
    marginBottomSmall: {
      marginBottom: theme.spacing(1)
    },
    marginLeftSmall: {
      marginLeft: theme.spacing(1)
    },
    editorButtonGroup: {
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    toolsBar: {
      borderRight: `1px solid ${theme.palette.divider}`,
      padding: "0 !important"
    },
    menuTabs: {
      height: "calc(100vh - 160px);",
      '& div[class*="MuiTabScrollButton-vertical"]': {
        height: "10px"
      },
      '& button[class*="MuiTab-wrapped"]': {
        fontSize: "12px"
      },
      '& button[class*="Mui-disabled"]': {
        paddingTop: "8px !important",
        paddingBottom: "8px !important"
      }
    },
    tab: {
      // @ts-ignore
      color: theme.palette.link,
      "&:hover": {
        // @ts-ignore
        color: theme.palette.linkHover,
        background: "transparent"
      },
      '&[aria-selected="true"]': {
        fontWeight: "bold"
      }
    },
    tabDivider: {
      marginTop: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: "50px",
      color: theme.palette.text.primary,
      borderTop: `1px solid ${theme.palette.divider} !important`
    },
    search: {
      margin: theme.spacing(2),
      marginBottom: theme.spacing(1),
      display: "flex",
      "& input": {
        marginLeft: theme.spacing(2),
        width: "100%",
        flex: 1
      },
      height: "48px"
    },
    previewPaper: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    toolContainer: {
      padding: "1rem",
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      overflow: "auto",
      zIndex: 1e4,
      backgroundColor: theme.palette.background.default
    }
  };
});

export { useFavoriteStorage, useStyles };
//# sourceMappingURL=hooks.esm.js.map
