import { header } from "../js/header.js";
header();

import { carsTable } from "../js/cars.js"
import { audiData } from "./data/audi.js";
import { subaruData } from "./data/subaru.js";
import { volvoData } from "./data/volvo.js";


const appDOM = document.getElementById('app');
appDOM.innerHTML = carsTable(audiData);

const appDOM2 = document.getElementById('app2');
appDOM2.innerHTML = carsTable(volvoData);

const appDOM3 = document.getElementById('app3');
appDOM3.innerHTML = carsTable(subaruData);