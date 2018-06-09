const endpoint = 'http://localhost:8080/';

const headers = () => {
    const h = new Headers();

    h.append('Accept', '*/*');
    h.append('Content-Type', 'application/json');
    h.append('Access-Control-Allow-Origin', '*');
    h.append('Connection', 'keep-alive');
    h.append('User-Agent','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36');


    // const session = {
    //     email: localStorage.getItem('email'),
    //     token: localStorage.getItem('token'),
    // };

    // if (session.email && session.token) {
    //     h.append('X-User-Email', session.email);
    //     h.append('X-User-Token', session.token);
    // }

    return h;
};

const request = (method, path, body) => {
    const url = `${endpoint}${path}`;
    const options = { method, headers: headers() };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(new Request(url, options));
};


const Api = {
    get(path) {
        return request('GET', path);
    },
    get(path, id) {
        return request('GET', path +"/"+ id);
    },
    post(path, data = {}) {
        return request('POST', path, data);
    },
    delete(path) {
        return request('DELETE', path);
    },
};

export default Api;