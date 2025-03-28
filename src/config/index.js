import axios from "axios";
let baseURL;

switch (location.hostname){
    case 'localhost':
        baseURL = 'https://sheetdb.io/api/v1/dhrr00fy1mw52'
        break;
    case 'https://frazattologistica.com.br/':
        baseURL = 'https://sheetdb.io/api/v1/dhrr00fy1mw52'
        break;
    default:
        baseURL = 'https://sheetdb.io/api/v1/dhrr00fy1mw52'
}

const http = axios.create({baseURL})

export default http;