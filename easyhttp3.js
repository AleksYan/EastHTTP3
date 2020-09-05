class EasyHttp3 {

    //make get request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //make post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'applications/json' },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData
    }

    //make put request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'applications/json' },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    //make delete req
    async delete(url, data) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-type':'application/json'}
        });
        const resData = await 'Resource deleted ...';
        return resData
    }
}
