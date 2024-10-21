import { toolboxApiRef } from './api/ToolboxApi.esm.js';
import { useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';
import { useState, useEffect } from 'react';
import { useTranslationRef } from '@backstage/core-plugin-api/alpha';
import { toolboxTranslationRef } from './translation.esm.js';

const useBackendTools = () => {
  const [tools, setTools] = useState([]);
  const toolboxApi = useApi(toolboxApiRef);
  useEffect(() => {
    (async () => {
      setTools(await toolboxApi.getBackendTools());
    })();
  }, [toolboxApi]);
  return tools;
};
function useToolboxApi(f, deps = []) {
  const toolboxApi = useApi(toolboxApiRef);
  return useAsync(async () => {
    return await f(toolboxApi);
  }, deps);
}
const useToolboxTranslation = () => {
  return useTranslationRef(toolboxTranslationRef);
};

export { useBackendTools, useToolboxApi, useToolboxTranslation };
//# sourceMappingURL=hooks.esm.js.map
