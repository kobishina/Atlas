export const doApi54 = async (_searchQ) => {
    try {
        let url = `https://restcountries.com/v3.1/all`;

        let resp = await axios.get(url);
        console.log(resp.data);
        check(resp.data)
    }
    catch (err) {
        console.log(err);
    }
}
export const check = (_arr) => {
    let obj = {};
    _arr.forEach(item => {
        obj[item.cca3] = item.name.common;
    });
}