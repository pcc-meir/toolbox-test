import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToolsPage } from './ToolsPage.esm.js';
import { ToolPage } from './ToolPage.esm.js';

const Root = (props) => {
  return /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, { path: "/", element: /* @__PURE__ */ React.createElement(ToolsPage, { ...props }) }), /* @__PURE__ */ React.createElement(Route, { path: "/tool/:id", element: /* @__PURE__ */ React.createElement(ToolPage, { ...props }) }));
};

export { Root };
//# sourceMappingURL=Root.esm.js.map
