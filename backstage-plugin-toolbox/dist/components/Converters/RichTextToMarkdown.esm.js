import React, { useEffect } from 'react';
import TurndownService from 'turndown';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { MarkdownContent } from '@backstage/core-components';
import { useStyles } from '../../utils/hooks.esm.js';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useToolboxTranslation } from '../../hooks.esm.js';

const { gfm } = require("turndown-plugin-gfm");
const RichTextToMarkdown = () => {
  const { classes } = useStyles();
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const { t } = useToolboxTranslation();
  const sample = "<h1>Hello world</h1><p>This is some content</p>";
  useEffect(() => {
    const turndownService = new TurndownService({
      headingStyle: "atx",
      codeBlockStyle: "fenced"
    });
    turndownService.use(gfm);
    setOutput(turndownService.turndown(input));
  }, [input]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      output,
      sample,
      allowFileUpload: true,
      acceptFileTypes: ".html,.htm,.txt",
      allowFileDownload: true,
      downloadFileName: "download.md",
      downloadFileType: "text/markdown",
      extraRightContent: /* @__PURE__ */ React.createElement(React.Fragment, null, output && /* @__PURE__ */ React.createElement(
        Paper,
        {
          elevation: 0,
          className: classes.previewPaper,
          style: { marginTop: "1rem" }
        },
        /* @__PURE__ */ React.createElement(Typography, { variant: "subtitle1" }, t("tool.rich-text-to-markdown-convert.preview"), ":"),
        /* @__PURE__ */ React.createElement(MarkdownContent, { content: output })
      ))
    }
  );
};

export { RichTextToMarkdown, RichTextToMarkdown as default };
//# sourceMappingURL=RichTextToMarkdown.esm.js.map
