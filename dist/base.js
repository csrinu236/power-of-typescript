"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
    }
    invoke(endpoint, options) {
        const url = `${this.baseUrl}${endpoint}`;
        return fetch(url, Object.assign({ headers: {
                "Content-Type": "application/json",
                "api-key": this.apiKey,
            } }, options)).then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            throw new Error(resp.statusText);
        });
    }
}
exports.Base = Base;
