import React, { lazy } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';

const Base64Encode = lazy(() => import('../Encoders/Base64Encode.esm.js'));
const UrlEncode = lazy(() => import('../Encoders/UrlEncode.esm.js'));
const HtmlEntities = lazy(() => import('../Encoders/HtmlEntities.esm.js'));
const Backslash = lazy(() => import('../Encoders/Backslash.esm.js'));
const JwtDecoder = lazy(() => import('../Encoders/JwtDecoder.esm.js'));
const NumberBase = lazy(() => import('../Converters/NumberBase.esm.js'));
const MarkdownPreview = lazy(() => import('../Converters/MarkdownPreview.esm.js'));
const CsvToJson = lazy(() => import('../Converters/CsvToJson.esm.js'));
const JsonToCsv = lazy(() => import('../Converters/JsonToCsv.esm.js'));
const JsonToYaml = lazy(() => import('../Converters/JsonToYaml.esm.js'));
const YamlToJson = lazy(() => import('../Converters/YamlToJson.esm.js'));
const StringUtilities = lazy(() => import('../Converters/StringUtilities.esm.js'));
const TimeConverter = lazy(() => import('../Converters/TimeConverter.esm.js'));
const XmlToJson = lazy(() => import('../Converters/XmlToJson.esm.js'));
const SLACalculator = lazy(() => import('../Converters/SLACalculator.esm.js'));
const ColorConverter = lazy(() => import('../Converters/ColorConverter.esm.js'));
const RichTextToMarkdown = lazy(
  () => import('../Converters/RichTextToMarkdown.esm.js')
);
const EntityValidator = lazy(() => import('../Validators/EntityValidator.esm.js'));
const EntityDescriber = lazy(() => import('../Misc/EntityDescriber.esm.js'));
const Countdown = lazy(() => import('../Misc/Countdown.esm.js'));
const Timer = lazy(() => import('../Misc/Timer.esm.js'));
const Diff = lazy(() => import('../Misc/Diff.esm.js'));
const LoremIpsum = lazy(() => import('../Generators/LoremIpsum.esm.js'));
const Hash = lazy(() => import('../Generators/Hash.esm.js'));
const QRCode = lazy(() => import('../Generators/QRCode.esm.js'));
const BarCode = lazy(() => import('../Generators/BarCode.esm.js'));
const Interface = lazy(() => import('../Generators/Interface.esm.js'));
const JSBeautify = lazy(() => import('../Formatters/JSBeautify.esm.js'));
const HTMLBeautify = lazy(() => import('../Formatters/HTMLBeautify.esm.js'));
const CSSBeautify = lazy(() => import('../Formatters/CSSBeautify.esm.js'));
const SQLBeautify = lazy(() => import('../Formatters/SQLBeautify.esm.js'));
const IbanValidator = lazy(() => import('../Validators/IbanValidator.esm.js'));
const UrlExploder = lazy(() => import('../Misc/UrlExploder.esm.js'));
const Whois = lazy(() => import('../Networking/Whois.esm.js'));
const StringAnalyzer = lazy(() => import('../Misc/StringAnalyzer.esm.js'));
const defaultTools = [
  {
    id: "base64-encode",
    name: "Base64",
    component: /* @__PURE__ */ React.createElement(Base64Encode, null),
    category: "Encode/Decode",
    description: "Encode and decode base64 strings"
  },
  {
    id: "url-encode",
    name: "URL",
    component: /* @__PURE__ */ React.createElement(UrlEncode, null),
    category: "Encode/Decode",
    description: "Encode and decode URLs"
  },
  {
    id: "html-entity-encode",
    name: "HTML entities",
    component: /* @__PURE__ */ React.createElement(HtmlEntities, null),
    category: "Encode/Decode",
    description: "Encode and decode HTML entity characters"
  },
  {
    id: "backslash-encode",
    name: "Backslash escape",
    component: /* @__PURE__ */ React.createElement(Backslash, null),
    category: "Encode/Decode",
    description: "Encode and decode backslash escape characters"
  },
  {
    id: "jwt-decoder-encode",
    name: "JSON Web Token",
    component: /* @__PURE__ */ React.createElement(JwtDecoder, null),
    category: "Encode/Decode",
    description: "Encode and decode JSON Web Tokens",
    aliases: ["jwt"]
  },
  {
    id: "markdown-preview",
    name: "Markdown preview",
    component: /* @__PURE__ */ React.createElement(MarkdownPreview, null),
    description: "Render markdown as HTML",
    aliases: ["md"]
  },
  {
    id: "csv-to-json-convert",
    name: "CSV to JSON",
    component: /* @__PURE__ */ React.createElement(CsvToJson, null),
    category: "Convert",
    description: "Convert CSV text to JSON"
  },
  {
    id: "json-to-csv-convert",
    name: "JSON to CSV",
    component: /* @__PURE__ */ React.createElement(JsonToCsv, null),
    category: "Convert",
    description: "Convert to JSON text to CSV"
  },
  {
    id: "xml-to-json-convert",
    name: "XML to JSON",
    component: /* @__PURE__ */ React.createElement(XmlToJson, null),
    category: "Convert",
    description: "Convert to XML text to JSON"
  },
  {
    id: "json-to-yaml-convert",
    name: "JSON to YAML",
    component: /* @__PURE__ */ React.createElement(JsonToYaml, null),
    category: "Convert",
    description: "Convert to JSON text to YAML"
  },
  {
    id: "yaml-to-json-convert",
    name: "YAML to JSON",
    component: /* @__PURE__ */ React.createElement(YamlToJson, null),
    category: "Convert",
    description: "Convert to YAML text to JSON"
  },
  {
    id: "rich-text-to-markdown-convert",
    name: "HTML to Markdown",
    component: /* @__PURE__ */ React.createElement(RichTextToMarkdown, null),
    category: "Convert",
    description: "Convert rich text to markdown"
  },
  {
    id: "number-base-convert",
    name: "Number base",
    component: /* @__PURE__ */ React.createElement(NumberBase, null),
    category: "Convert",
    description: "Convert numbers between different bases"
  },
  {
    id: "string-utilities-convert",
    name: "String utilities",
    component: /* @__PURE__ */ React.createElement(StringUtilities, null),
    category: "Convert",
    description: "Convert string to different case or string"
  },
  {
    id: "string-analyzer",
    name: "String analyzer",
    component: /* @__PURE__ */ React.createElement(StringAnalyzer, null),
    category: "Miscellaneous",
    description: "Analyze string and get statistics"
  },
  {
    id: "time-convert",
    name: "Time format",
    component: /* @__PURE__ */ React.createElement(TimeConverter, null),
    category: "Convert",
    description: "Convert to time to different presentations"
  },
  {
    id: "color-convert",
    name: "Color format",
    component: /* @__PURE__ */ React.createElement(ColorConverter, null),
    category: "Convert",
    description: "Convert to color between different representation models"
  },
  {
    id: "sla-calculator",
    name: "Service level agreement",
    component: /* @__PURE__ */ React.createElement(SLACalculator, null),
    category: "Calculate",
    description: "Calculate service level agreement percentage in time"
  },
  {
    id: "entity-validator",
    name: "Entity validator",
    component: /* @__PURE__ */ React.createElement(EntityValidator, null),
    category: "Backstage",
    headerButtons: [
      /* @__PURE__ */ React.createElement(
        Button,
        {
          variant: "contained",
          size: "small",
          target: "_blank",
          href: "https://backstage.io/docs/features/software-catalog/descriptor-format",
          startIcon: /* @__PURE__ */ React.createElement(DescriptionIcon, null),
          color: "inherit",
          sx: {
            backgroundColor: "#E0E0E0",
            color: "#000000 !important",
            "&:hover": {
              backgroundColor: "#E0E0E0"
            }
          }
        },
        "Entity descriptor format"
      )
    ],
    description: "Validate catalog entity YAML"
  },
  {
    id: "entity-describer",
    name: "Entity describer",
    component: /* @__PURE__ */ React.createElement(EntityDescriber, null),
    category: "Backstage",
    description: "Describes existing catalog entity in YAML"
  },
  {
    id: "qr-code-generate",
    name: "QR Code",
    component: /* @__PURE__ */ React.createElement(QRCode, null),
    category: "Generate",
    description: "Generate QR code from text"
  },
  {
    id: "bar-code-generate",
    name: "Barcode",
    component: /* @__PURE__ */ React.createElement(BarCode, null),
    category: "Generate",
    description: "Generate Barcode from text"
  },
  {
    id: "lorem-ipsum-generate",
    name: "Lorem Ipsum",
    component: /* @__PURE__ */ React.createElement(LoremIpsum, null),
    category: "Generate",
    description: "Generate random text for placeholders"
  },
  {
    id: "hash-generate",
    name: "Hash",
    component: /* @__PURE__ */ React.createElement(Hash, null),
    category: "Calculate",
    description: "Calculate hash from given text",
    aliases: ["md2", "md5", "sha1", "sha256", "sha512"]
  },
  {
    id: "interface-generate",
    name: "JSON to Interface",
    component: /* @__PURE__ */ React.createElement(Interface, null),
    category: "Generate",
    description: "Generate interfaces for different programming languages from JSON"
  },
  {
    id: "format-js",
    name: "Javascript / JSON",
    component: /* @__PURE__ */ React.createElement(JSBeautify, null),
    category: "Format",
    description: "Reformat Javascript / JSON code with Beautify",
    aliases: ["js-beautify", "js"]
  },
  {
    id: "format-html",
    name: "HTML",
    component: /* @__PURE__ */ React.createElement(HTMLBeautify, null),
    category: "Format",
    description: "Reformat HTML code with Beautify"
  },
  {
    id: "format-css",
    name: "CSS",
    component: /* @__PURE__ */ React.createElement(CSSBeautify, null),
    category: "Format",
    description: "Reformat CSS code with Beautify"
  },
  {
    id: "format-sql",
    name: "SQL",
    component: /* @__PURE__ */ React.createElement(SQLBeautify, null),
    category: "Format",
    description: "Reformat SQL code with Beautify"
  },
  {
    id: "countdown",
    name: "Countdown timer",
    component: /* @__PURE__ */ React.createElement(Countdown, null),
    category: "Miscellaneous",
    description: "Timer that counts down and notifies when time runs out"
  },
  {
    id: "stopwatch",
    name: "Stopwatch timer",
    component: /* @__PURE__ */ React.createElement(Timer, null),
    category: "Miscellaneous",
    description: "Timer that counts up until stopped"
  },
  {
    id: "diff",
    name: "Text diff",
    component: /* @__PURE__ */ React.createElement(Diff, null),
    category: "Miscellaneous",
    description: "Shows differences between two texts"
  },
  {
    id: "iban",
    name: "IBAN validator",
    component: /* @__PURE__ */ React.createElement(IbanValidator, null),
    category: "Validate",
    description: "Validates IBAN based on ISO 13616"
  },
  {
    id: "url-exploder",
    name: "URL exploder",
    component: /* @__PURE__ */ React.createElement(UrlExploder, null),
    category: "Miscellaneous",
    description: "Explode and modify parts of URL easily"
  },
  {
    id: "whois",
    name: "Whois lookup",
    component: /* @__PURE__ */ React.createElement(Whois, null),
    category: "Networking",
    description: "Lookup domain WHOIS information",
    requiresBackend: true
  }
  /**
   {
   id: 'cidr-calculator',
   name: 'CIDR calculator',
   component: <CidrCalculator />,
   category: 'Networking',
   },
   */
];

export { defaultTools };
//# sourceMappingURL=tools.esm.js.map
