import { header } from "../js/header.js";
header();

import { apartmentTable } from "../js/namas.js";
import { kaunasData } from "./data/kaunas.js";
import { klaipedaData } from "./data/klaipeda.js";
import { vilniusData } from "./data/vilnius.js";



const appDOM = document.getElementById('app');
appDOM.innerHTML = apartmentTable(vilniusData);

const appDOM2 = document.getElementById('app2');
appDOM2.innerHTML = apartmentTable(kaunasData);

const appDOM3 = document.getElementById('app3');
appDOM3.innerHTML = apartmentTable(klaipedaData);