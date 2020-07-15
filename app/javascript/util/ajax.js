export default (params) => {
    const {url, ...restParams} = params;
    return fetch(url, { ...restParams, credentials: 'include'}).then(response => {
        if (!response.ok) {
            throw new Error('Server response was not ok');
        }
        return response.json();
    })
}