import { declareEvents } from "./atlas_form.js";
import { doApi } from "./atlas_manager.js";


const init = () => {
    doApi("israel");
    declareEvents();
}

init();