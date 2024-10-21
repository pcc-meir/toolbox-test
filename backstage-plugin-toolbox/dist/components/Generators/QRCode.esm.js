import React from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { faker } from '@faker-js/faker';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [input, setInput] = React.useState("");
  const sample = faker.internet.url();
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      inputProps: { maxLength: 2048 },
      sample,
      rightContent: /* @__PURE__ */ React.createElement(QRCode, { size: 512, value: input.substring(0, 2048) })
    }
  );
};

export { QRCodeGenerator, QRCodeGenerator as default };
//# sourceMappingURL=QRCode.esm.js.map
