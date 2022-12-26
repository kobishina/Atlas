import { obNamesByCode } from "./objs.js";

export const doApi = async (_searchQ) => {
    if (!(_searchQ == "Palestine" || _searchQ == "palestine")) {

        try {
            let url = `https://restcountries.com/v3.1/name/${_searchQ}`;

            let resp = await axios.get(url);
            console.log(resp.data);
            createFile(resp.data)
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const createFile = (_arr) => {
    document.querySelector("#id_name").innerHTML = _arr[0].name.common;
    document.querySelector("#id_flag").src = _arr[0].flags.png;
    document.querySelector("#id_capital").innerHTML = _arr[0].capital[0];
    document.querySelector("#id_pop").innerHTML = _arr[0].population.toLocaleString();

    document.querySelector("#id_region").innerHTML = _arr[0].region;
    //Object.values(_arr[0].languages)[0] + " " + Object.values(_arr[0].languages)[1]
    document.querySelector("#id_coin").innerHTML = Object.keys(_arr[0].currencies) + " "
        + Object.values(_arr[0].currencies)[0].name + " "
        + Object.values(_arr[0].currencies)[0].symbol;

    let id_row = document.querySelector("#id_row");

    if (_arr[0].borders) {
        id_row.innerHTML = "";
        _arr[0].borders.forEach(item => {
            if (!(obNamesByCode(item) == "Palestine")) {

                let borderStates = document.createElement("button");
                borderStates.className = "btn btn-danger col m-1";
                borderStates.innerHTML = obNamesByCode(item);
                id_row.append(borderStates);

                borderStates.addEventListener("click", () => {
                    doApi(borderStates.innerHTML);
                })
            }
        });


    } else {
        id_row.innerHTML = `
        <h3 class="text-danger h2">This Country Dont Have Any Friends :(</h3>
        `
    }

    createMap(_arr[0].latlng[0], _arr[0].latlng[1]);

}

const createMap = (_longitude, _Latitude) => {
    document.querySelector("#id_map").src = `
    https://maps.google.com/maps?q=${_longitude},${_Latitude}&z=5&ie=UTF8&iwloc=&output=embed`;
}
