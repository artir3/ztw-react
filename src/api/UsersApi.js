import {Redirect} from 'react-router';


import Api from './Api';

class UsersApi {
    all = [];
    isLoading = false;


    async fetchAll(path) {
        this.isLoading = true;
        const response = await Api.get(path);
        const status = await response.status;

        if (status === 200) {
            const json = await response.json();
            this.all = await json.data;
            this.isLoading = false;
        }
    }

    async push(path, data) {
        const response = await Api.post(path, data);
        const status = await response.status;
        if (status === 201) {
            this.fetchAll(path);
        }
    }

    async loginApi(path, data) {
        const response = await Api.post(path + "/ul/", data);
        const status = await response.status;
        if (status === 200) {
            const body = await response.json().then(data => {
                localStorage.setItem('token', data.authorisationToken);
                let b = data.authorisationToken !== null;
                localStorage.setItem('isloged', b.toString());
            });
            // const { req } = body.data;
        }
    }

    async find(path, contactId) {
        this.isLoading = true;
        const response = await Api.get(path, contactId);
        const status = await response.status;

        if (status === 200) {
            const json = await response.json();
            this.isLoading = false;
            return await json.data;
        }
    }

    async remove(path, contactId) {
        this.isLoading = true;
        const response = await Api.delete(`${path}/${contactId}`);
        const status = await response.status;

        if (status === 200) {
            this.isLoading = false;
            this.fetchAll(path);
        }
    }
}


export default new UsersApi();