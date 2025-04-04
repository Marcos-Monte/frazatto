import axios from "axios";
let baseURL;

switch (location.hostname){
    case 'localhost':
        baseURL = 'https://sheetdb.io/api/v1/ik7372mlkcyvg' // Teste
        break;
    case 'https://frazattologistica.com.br/':
        baseURL = 'https://sheetdb.io/api/v1/2v1v4esqb4kw4' // Frazatto
        break;
    default:
        baseURL = 'https://sheetdb.io/api/v1/ik7372mlkcyvg' // Teste
}

const http = axios.create({baseURL})

export default http;