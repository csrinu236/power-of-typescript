type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  apiKey: string;
  baseUrl: string;
  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
  }

  protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "api-key": this.apiKey,
      },
      ...options,
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error(resp.statusText);
    });
  }
}
