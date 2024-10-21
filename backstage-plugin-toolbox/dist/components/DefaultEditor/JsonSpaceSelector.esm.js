import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { useToolboxTranslation } from '../../hooks.esm.js';

const JsonSpaceSelector = (props) => {
  const { t } = useToolboxTranslation();
  return /* @__PURE__ */ React.createElement(
    Select,
    {
      value: props.spaces,
      onChange: (e) => props.onChange(Number.parseInt(e.target.value, 10)),
      variant: "standard",
      MenuProps: {
        MenuListProps: {
          sx: {
            "li.MuiButtonBase-root": {
              display: "flex",
              flexDirection: "column"
            }
          }
        }
      }
    },
    /* @__PURE__ */ React.createElement(MenuItem, { value: 2, sx: { p: "6px 16px !important" } }, t("components.jsonSpaceSelector.space", { count: 2 })),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 3, sx: { p: "6px 16px !important" } }, t("components.jsonSpaceSelector.space", { count: 3 })),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 4, sx: { p: "6px 16px !important" } }, t("components.jsonSpaceSelector.space", { count: 4 })),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 8, sx: { p: "6px 16px !important" } }, t("components.jsonSpaceSelector.space", { count: 8 }))
  );
};

export { JsonSpaceSelector };
//# sourceMappingURL=JsonSpaceSelector.esm.js.map
