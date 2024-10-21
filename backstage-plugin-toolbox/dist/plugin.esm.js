import { createPlugin, createApiFactory, fetchApiRef, discoveryApiRef, createRoutableExtension } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes.esm.js';
import { createCardExtension } from '@backstage/plugin-home-react';
import 'react';
import 'react-router-dom';
import '@backstage/core-components';
import './utils/hooks.esm.js';
import '@mui/icons-material/Search';
import { defaultTools } from './components/Root/tools.esm.js';
import '@mui/icons-material/OpenInNew';
import '@mui/material/Tooltip';
import '@mui/material/Button';
import '@mui/icons-material/Clear';
import { toolboxApiRef } from './api/ToolboxApi.esm.js';
import { ToolboxClient } from './api/ToolboxClient.esm.js';
import 'react-use/lib/useAsync';
import '@backstage/core-plugin-api/alpha';
import './translation.esm.js';
import '@mui/icons-material/FileCopy';
import '@mui/icons-material/Star';
import '@mui/icons-material/StarOutline';
import '@mui/icons-material/AssignmentReturned';
import '@mui/icons-material/Input';
import '@mui/icons-material/AttachFile';
import './components/WelcomePage/WelcomePage.esm.js';
import '@mui/material/Tab';
import '@mui/material/Grid';
import '@mui/material/InputBase';
import '@mui/material/Paper';
import '@mui/material/IconButton';
import '@mui/material/Tabs';
import '@mui/material/Box';
import '@mui/material/CircularProgress';
import '@mui/lab/TabPanel';
import '@mui/lab/TabContext';

const toolboxPlugin = createPlugin({
  id: "toolbox",
  routes: {
    root: rootRouteRef
  },
  apis: [
    createApiFactory({
      api: toolboxApiRef,
      deps: { fetchApi: fetchApiRef, discoveryApi: discoveryApiRef },
      factory: ({ fetchApi, discoveryApi }) => new ToolboxClient({ fetchApi, discoveryApi })
    })
  ]
});
const ToolboxPage = toolboxPlugin.provide(
  createRoutableExtension({
    name: "ToolboxPage",
    component: () => import('./components/Root/index.esm.js').then((m) => m.Root),
    mountPoint: rootRouteRef
  })
);
const ToolboxHomepageCard = toolboxPlugin.provide(
  createCardExtension({
    name: "ToolboxHomepageCard",
    title: "Toolbox",
    description: "Shows wanted tool from the toolbox",
    components: () => import('./components/HomepageCard/index.esm.js'),
    layout: {
      height: { minRows: 4 },
      width: { minColumns: 4 }
    },
    settings: {
      schema: {
        title: "Toolbox settings",
        type: "object",
        properties: {
          toolId: {
            title: "Tool",
            type: "string",
            enum: defaultTools.map((tool) => tool.id),
            default: "any"
          }
        }
      }
    }
  })
);

export { ToolboxHomepageCard, ToolboxPage, toolboxPlugin };
//# sourceMappingURL=plugin.esm.js.map
