import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor.esm.js';
import { faker } from '@faker-js/faker';
import { sha1, sha256, sha384, sha512 } from 'crypto-hash';
import { Md5 } from 'ts-md5';
import md2 from 'js-md2';
import md4 from 'js-md4';
import { OutputField } from '../DefaultEditor/OutputField.esm.js';

const Hash = () => {
  const [input, setInput] = React.useState("");
  const [hash, setHash] = React.useState({
    md2: "",
    md4: "",
    md5: "",
    sha1: "",
    sha256: "",
    sha384: "",
    sha512: ""
  });
  const sample = faker.lorem.paragraph();
  useEffect(() => {
    Promise.all([
      md2(input),
      md4(input),
      Md5.hashStr(input),
      sha1(input),
      sha256(input),
      sha384(input),
      sha512(input)
    ]).then((results) => {
      setHash({
        md2: results[0],
        md4: results[1],
        md5: results[2],
        sha1: results[3],
        sha256: results[4],
        sha384: results[5],
        sha512: results[6]
      });
    });
  }, [input]);
  return /* @__PURE__ */ React.createElement(
    DefaultEditor,
    {
      input,
      setInput,
      sample,
      allowFileUpload: true,
      rightContent: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(OutputField, { label: "MD2", value: hash.md2 }), /* @__PURE__ */ React.createElement(OutputField, { label: "MD4", value: hash.md4 }), /* @__PURE__ */ React.createElement(OutputField, { label: "MD5", value: hash.md5 }), /* @__PURE__ */ React.createElement(OutputField, { label: "SHA1", value: hash.sha1 }), /* @__PURE__ */ React.createElement(OutputField, { label: "SHA256", value: hash.sha256 }), /* @__PURE__ */ React.createElement(OutputField, { label: "SHA384", value: hash.sha384 }), /* @__PURE__ */ React.createElement(OutputField, { label: "SHA512", value: hash.sha512 }))
    }
  );
};

export { Hash, Hash as default };
//# sourceMappingURL=Hash.esm.js.map
