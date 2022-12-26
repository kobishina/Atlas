import { doApi } from "./atlas_manager.js";

let btn_countery = document.querySelectorAll(".btn_country");
let input_search = document.querySelector("#id_search");
let btn_search = document.querySelector("#btn_search");

export const declareEvents = () => {
    btn_countery.forEach(country => {
        country.addEventListener("click", () => {
            doApi(country.innerHTML);
        })
    })

    //לחיצה על אנטר יעבוד
    input_search.addEventListener("keydown",(e)=>{
        if(e.key == "Enter"){
            doApi(input_search.value);
            input_search.value = "";
        }
    })

    // לחיצה על כפתור חיפוש יעבוד
    btn_search.addEventListener("click", () => {
        doApi(input_search.value);
        input_search.value = "";
    })
}