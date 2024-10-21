import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { MarkdownContent } from '@backstage/core-components';
import { useStyles } from '../../utils/hooks.esm.js';
import beautify from 'js-beautify';
import { unescape } from 'lodash';
import Paper from '@mui/material/Paper';

const MarkdownPreview = () => {
  const { classes } = useStyles();
  const [input, setInput] = React.useState("");
  const [html, setHtml] = React.useState("");
  const sample = "# Header 1\n\nHello. This is markdown.\n\n* List item 1\n* List item2\n";
  useEffect(() => {
    const preview = document.getElementsByClassName("mdPreview").item(0);
    if (preview) {
      setHtml(unescape(beautify.html_beautify(preview.innerHTML)));
    }
  }, [input]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      inputLabel: "Markdown",
      sample,
      allowFileUpload: true,
      acceptFileTypes: ".md",
      rightContent: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Paper, { elevation: 0, className: classes.previewPaper }, /* @__PURE__ */ React.createElement(MarkdownContent, { className: "mdPreview", content: input })), /* @__PURE__ */ React.createElement(
        Paper,
        {
          elevation: 0,
          className: classes.previewPaper,
          style: { marginTop: "1rem", whiteSpace: "pre-line" }
        },
        html
      ))
    }
  );
};

export { MarkdownPreview, MarkdownPreview as default };
//# sourceMappingURL=MarkdownPreview.esm.js.map
