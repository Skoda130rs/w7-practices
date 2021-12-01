/*
function functionName(parameter) {
    parameter === "argumentum as a string";
}
functionName("argumentum as a string");


const argument = "argument as a string";

const functionName = function (parameter){
    parameter === "argument is a string"
}
functionName(argument);

const functionName = () => {

}
functionName();
*/


const inputElement = (type, name, label) => {
    return `
    <div>
        <label class="${name}">  ${label} </label>
        <input type="${type}" name="${name}">
        </div>
    `
}
const selectElement = (type, name, label, selectOptions) => {
    let optionElements = "";
    for (const option of selectOptions) {
        optionElements += `<option>${option}</option>`; 
    }
    return `
    <div>
        <label class="${name}">${label}</label>
        <${type}> name="${name}"
            ${optionElements}
        </${type}>
        </div>
    `
}

/*
const formElement '<form id="form">' + inputElement("text", "firstName", "Keresztneved") + inputElement("file", "profilePicture", "Profilképed") + inputElement("email", "personalEmail", "Email címed") + inputElement("checkbox", "terms", "Elfogadod a felhasználási feltételeket?") + selectElement("select", "where", "Hol hallottál rólunk?", ["Internetről", "Ismerőstől", "Egyéb"]) + '<button>OK</button>'
*/

const formElement = `
    <form id="form" >
        ${ inputElement("text", "firstName", "Keresztneved") }
        ${ inputElement("file", "profilePicture", "Profilképed") }
        ${ inputElement("email", "personalEmail", "Email címed") }
        ${ inputElement("checkbox", "newsletter", "Szeretnél-e hírlevelet kapni") }
        ${ inputElement("checkbox", "terms", "Elfogadod a felhasználási feltételeket?")}
        ${ selectElement("select", "where", "Hol hallottál rólunk?", ["Internetről", "Ismerőstől", "Egyéb"])}
        <button>OK</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const et = event.target;
    et.classList.add("submitted");
    const etValue = et.querySelector(`select[name="where"]`).value;
    console.log(etValue);

}

const inputEvent = (event) => {
    const fName = document.querySelector(`input[name="firstName"]`);
    let tryForm = event.target.closest("#form");
    console.log(tryForm);
    if(event.target.getAttribute("name") === "firstName"){  
    document.getElementById("inputValueContent").innerHTML = event.target.value;
    }
}

function loadEvent(){
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", `<div id="inputValueContent"></div>`);  
    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("input");
    for(const input of inputList){
        input.addEventListener("input", inputEvent);
    }
}



window.addEventListener("load", loadEvent);