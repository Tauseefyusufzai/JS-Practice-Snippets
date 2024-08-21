//fetch API
// the fetch API provide an interface for fetching (sending/receiving)resources.
//it uses Request and Response object.
//The fetch() method is used to fetch a resourse(data).

//let promise = fetch(url,[option])

const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn")

let promise = fetch(URL);

let data;
const getFacts = async () =>{
    console.log("getting data.....")
    let response = await fetch(URL);
    console.log(response);
    data = await response.json();
    factPara.innerHTML = data[0].text
}
btn.addEventListener("click",getFacts)


//understanding Terms

//AJAX is Asynchronous JS & XML
//JSON is JavaScript object Notation

//json() method: return a second promise that resolve with the result of parsing the resposne body text as JSON (input is JSON, output is JS object)

//Request & Response
//HTTP verbs
// Response Status Code
//HTTP response header also contain details abouts the response, such as content type, HTTP status code etc.
