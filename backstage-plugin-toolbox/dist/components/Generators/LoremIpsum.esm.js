import React from 'react';
import { useStyles } from '../../utils/hooks.esm.js';
import { faker } from '@faker-js/faker';
import { upperFirst, lowerCase } from 'lodash';
import { ClearValueButton } from '../Buttons/ClearValueButton.esm.js';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton.esm.js';
import '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import { useToolboxTranslation } from '../../hooks.esm.js';
import '@mui/icons-material/AssignmentReturned';
import '@mui/icons-material/Input';
import '@mui/icons-material/AttachFile';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const randomInt = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};
const LoremIpsum = () => {
  const { classes } = useStyles();
  const [output, setOutput] = React.useState("");
  const [multiplier, setMultiplier] = React.useState(1);
  const generate = (type) => {
    let outputs = [];
    switch (type) {
      default:
      case "line":
        outputs = faker.lorem.lines(multiplier).split("\n");
        break;
      case "paragraph":
        outputs = faker.lorem.paragraphs(multiplier, "\n").split("\n");
        break;
      case "slug":
        outputs = faker.lorem.slug(multiplier).split("\n");
        break;
      case "word":
        outputs = faker.lorem.words(multiplier).split("\n");
        break;
      case "hack":
        outputs = [...Array(multiplier)].map(faker.hacker.phrase);
        break;
      case "hex":
        outputs = [...Array(multiplier)].map(
          () => faker.string.hexadecimal({
            length: randomInt(1, 50),
            casing: "lower"
          })
        );
        break;
      case "datetime":
        outputs = [...Array(multiplier)].map(faker.date.anytime);
        break;
      case "number":
        outputs = [...Array(multiplier)].map(
          () => faker.number.int({ min: 1, max: 1e17 })
        );
        break;
      case "string":
        outputs = [...Array(multiplier)].map(
          () => faker.string.sample(randomInt(10, 100))
        );
        break;
      case "uuid":
        outputs = [...Array(multiplier)].map(faker.string.uuid);
        break;
      case "ipv4":
        outputs = [...Array(multiplier)].map(faker.internet.ipv4);
        break;
      case "ipv6":
        outputs = [...Array(multiplier)].map(faker.internet.ipv6);
        break;
      case "mac":
        outputs = [...Array(multiplier)].map(faker.internet.mac);
        break;
      case "domain":
        outputs = [...Array(multiplier)].map(faker.internet.domainName);
        break;
      case "password":
        outputs = [...Array(multiplier)].map(
          () => faker.internet.password({
            length: randomInt(10, 100),
            memorable: false
          })
        );
        break;
      case "url":
        outputs = [...Array(multiplier)].map(faker.internet.url);
        break;
      case "user-agent":
        outputs = [...Array(multiplier)].map(faker.internet.userAgent);
        break;
      case "imei":
        outputs = [...Array(multiplier)].map(faker.phone.imei);
        break;
      case "cron":
        outputs = [...Array(multiplier)].map(faker.system.cron);
        break;
      case "emoji":
        outputs = [...Array(multiplier)].map(faker.internet.emoji);
        break;
      case "address":
        outputs = [...Array(multiplier)].map(
          () => `${faker.location.streetAddress(
            true
          )}, ${faker.location.zipCode()} ${faker.location.city()}, ${faker.location.country()}`
        );
        break;
      case "product-name":
        outputs = [...Array(multiplier)].map(faker.commerce.productName);
        break;
      case "product-description":
        outputs = [...Array(multiplier)].map(faker.commerce.productDescription);
        break;
      case "catch-phrase":
        outputs = [...Array(multiplier)].map(faker.company.catchPhrase);
        break;
      case "bic":
        outputs = [...Array(multiplier)].map(faker.finance.bic);
        break;
      case "credit-card":
        outputs = [...Array(multiplier)].map(faker.finance.creditCardNumber);
        break;
      case "iban":
        outputs = [...Array(multiplier)].map(
          () => faker.finance.iban({ formatted: true })
        );
        break;
      case "song":
        outputs = [...Array(multiplier)].map(faker.music.songName);
        break;
      case "name":
        outputs = [...Array(multiplier)].map(faker.person.fullName);
        break;
      case "job-title":
        outputs = [...Array(multiplier)].map(faker.person.jobTitle);
        break;
    }
    setOutput(outputs.join("\n"));
  };
  const GenerateButton = (props) => {
    const { t } = useToolboxTranslation();
    const title = props.title ? props.title : upperFirst(lowerCase(props.type));
    const translatedTitle = t(
      `tool.lorem-ipsum-generate.button.${props.type.toLowerCase()}`,
      { defaultValue: title }
    );
    return /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "small",
        variant: "outlined",
        onClick: () => generate(props.type),
        color: "inherit",
        sx: {
          px: "16px",
          borderColor: "textVerySubtle",
          borderRadius: "4px !important"
        }
      },
      translatedTitle
    );
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { container: true, style: { marginBottom: "5px" } }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(InputLabel, { id: "multiplier-label" }, "Count"), /* @__PURE__ */ React.createElement(Box, { sx: { ml: "16px " } }, /* @__PURE__ */ React.createElement(
    Select,
    {
      style: { minWidth: "100px" },
      labelId: "multiplier-label",
      value: multiplier.toString(10),
      onChange: (e) => setMultiplier(Number.parseInt(e.target.value, 10)),
      variant: "standard"
    },
    /* @__PURE__ */ React.createElement(MenuItem, { value: 1 }, "1"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 5 }, "5"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 10 }, "10"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 25 }, "25"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 50 }, "50"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 100 }, "100"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 250 }, "250"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 500 }, "500"),
    /* @__PURE__ */ React.createElement(MenuItem, { value: 1e3 }, "1000")
  ), /* @__PURE__ */ React.createElement(ButtonGroup, { className: classes.editorButtonGroup }, /* @__PURE__ */ React.createElement(ClearValueButton, { setValue: setOutput, tooltip: "Clear output" }), /* @__PURE__ */ React.createElement(CopyToClipboardButton, { output }))), /* @__PURE__ */ React.createElement(ButtonGroup, { className: classes.editorButtonGroup }, /* @__PURE__ */ React.createElement(GenerateButton, { type: "line" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "paragraph" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "slug" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "word" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "hack" })), /* @__PURE__ */ React.createElement(ButtonGroup, { className: classes.editorButtonGroup }, /* @__PURE__ */ React.createElement(GenerateButton, { type: "hex" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "datetime" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "number" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "string" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "uuid" })), /* @__PURE__ */ React.createElement(ButtonGroup, { className: classes.editorButtonGroup }, /* @__PURE__ */ React.createElement(GenerateButton, { type: "ipv4", title: "IPv4" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "ipv6", title: "IPv6" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "mac", title: "MAC" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "imei" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "cron" })), /* @__PURE__ */ React.createElement(ButtonGroup, { className: classes.editorButtonGroup }, /* @__PURE__ */ React.createElement(GenerateButton, { type: "domain" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "password" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "url", title: "URL" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "user-agent", title: "User agent" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "emoji" })), /* @__PURE__ */ React.createElement(ButtonGroup, { className: classes.editorButtonGroup }, /* @__PURE__ */ React.createElement(GenerateButton, { type: "address" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "name", title: "Name" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "job-title", title: "Job title" })), /* @__PURE__ */ React.createElement(ButtonGroup, { className: classes.editorButtonGroup }, /* @__PURE__ */ React.createElement(GenerateButton, { type: "product-name", title: "Product name" }), /* @__PURE__ */ React.createElement(
    GenerateButton,
    {
      type: "product-description",
      title: "Product description"
    }
  ), /* @__PURE__ */ React.createElement(GenerateButton, { type: "catch-phrase", title: "Catch phrase" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "song", title: "Song name" })), /* @__PURE__ */ React.createElement(ButtonGroup, { className: classes.editorButtonGroup }, /* @__PURE__ */ React.createElement(GenerateButton, { type: "bic", title: "BIC" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "credit-card", title: "Credit card" }), /* @__PURE__ */ React.createElement(GenerateButton, { type: "iban", title: "IBAN" }))), /* @__PURE__ */ React.createElement(Grid, { item: true, className: classes.fullWidth }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      id: "output",
      label: "Output",
      value: output || "",
      className: classes.fullWidth,
      multiline: true,
      minRows: 20,
      maxRows: 50,
      variant: "outlined"
    }
  )))));
};

export { LoremIpsum, LoremIpsum as default };
//# sourceMappingURL=LoremIpsum.esm.js.map
