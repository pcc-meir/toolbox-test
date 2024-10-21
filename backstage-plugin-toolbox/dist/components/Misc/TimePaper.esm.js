import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const TimePaper = (props) => {
  const formattedValue = props.value.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  return /* @__PURE__ */ React.createElement(Paper, { style: { padding: "1rem", textAlign: "center" } }, /* @__PURE__ */ React.createElement(Typography, { variant: "caption" }, props.title), /* @__PURE__ */ React.createElement(Typography, { variant: "h1" }, formattedValue));
};

export { TimePaper };
//# sourceMappingURL=TimePaper.esm.js.map
