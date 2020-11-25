export const callAPI = async () => {
    let url = 'http://localhost:5000/hello';
    try {
        let res = await fetch(url);
        let response = await res.json();
        return response
    } catch (error) {
        console.log(error);
    }
}