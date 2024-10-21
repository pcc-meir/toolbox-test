class ToolboxClient {
  fetchApi;
  discoveryApi;
  constructor(options) {
    this.fetchApi = options.fetchApi;
    this.discoveryApi = options.discoveryApi;
  }
  async getBaseUrl() {
    return this.discoveryApi.getBaseUrl("toolbox");
  }
  async getBackendTools() {
    const url = `${await this.getBaseUrl()}/tools`;
    try {
      const response = await this.fetchApi.fetch(url);
      const data = await response.json();
      return data.tools;
    } catch (error) {
      return [];
    }
  }
  async toolRequest(toolName, request) {
    const url = `${await this.getBaseUrl()}/${toolName}`;
    const response = await this.fetchApi.fetch(url, request);
    if (response.ok) {
      return response;
    }
    throw new Error(`Request failed with status ${response.status}`);
  }
  async toolJsonRequest(toolName, data) {
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await this.toolRequest(toolName, request);
    return response.json();
  }
}

export { ToolboxClient };
//# sourceMappingURL=ToolboxClient.esm.js.map
