import axios from "axios";

axios.defaults.baseURL = "https://api.qbar.ir/v1/foo";

const headers = {
    headers: {
        "content-type": "application/json",
    },
};

const http = {
    get: (url, config) => axios.get(url, {
        headers: headers.headers,
        params: config
    }),
    post: (url, config) => axios.post(url, config, headers),
    put: (url, config) => axios.put(url, config, headers),
    delete: (url) => axios.delete(url, headers),
};

export default http;
