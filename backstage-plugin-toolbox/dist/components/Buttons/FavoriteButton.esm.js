import React from 'react';
import { useFavoriteStorage } from '../../utils/hooks.esm.js';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import { useToolboxTranslation } from '../../hooks.esm.js';

const FAVORITES_STORAGE = "toolboxFavorites";
const FavoriteButton = (props) => {
  const { toolId } = props;
  const currentFavorites = useFavoriteStorage();
  const { t } = useToolboxTranslation();
  const handleClick = () => {
    try {
      const favorites = localStorage.getItem(FAVORITES_STORAGE);
      const favoriteList = favorites !== null ? JSON.parse(favorites) : [];
      if (favoriteList.includes(toolId)) {
        localStorage.setItem(
          "toolboxFavorites",
          JSON.stringify(favoriteList.filter((item) => item !== toolId))
        );
      } else {
        favoriteList.push(toolId);
        localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(favoriteList));
      }
    } catch (_) {
      localStorage.removeItem(FAVORITES_STORAGE);
    }
    window.dispatchEvent(
      new CustomEvent(FAVORITES_STORAGE, { detail: toolId })
    );
  };
  const isFavorite = currentFavorites.includes(toolId);
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      title: isFavorite ? t("components.favoriteButton.tooltipTitleFavorite") : t("components.favoriteButton.tooltipTitleNotFavorite"),
      arrow: true
    },
    /* @__PURE__ */ React.createElement(Button, { onClick: handleClick, color: "inherit" }, isFavorite ? /* @__PURE__ */ React.createElement(Star, null) : /* @__PURE__ */ React.createElement(StarOutline, null))
  );
};

export { FAVORITES_STORAGE, FavoriteButton };
//# sourceMappingURL=FavoriteButton.esm.js.map
