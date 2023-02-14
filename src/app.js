
const dolgozoTorzs = document.querySelector("#dolgozoTorzs");
const nameElem = document.querySelector("#name");
const cityElem = document.querySelector("#city");
const salaryElem = document.querySelector("#salary");
const addButton = document.querySelector("#addButton");



const dolgozoLista = [
    {id: 1, name: "Pali", city: "Szolnok", salary: 385},
    {id: 2, name: "Kati", city: "Szolnok", salary: 320},
    {id: 3, name: "Mari", city: "Szeged", salary: 395},
    {id: 4, name: "Dani", city: "Szeged", salary: 401},
    {id: 5, name: "Atti", city: "Miskolc", salary: 372},
    {id: 6, name: "Pisti", city: "Szolnok", salary: 357},
    {id: 7, name: "Géza", city: "Pécs", salary: 325}
];

function loadEmloyees(){
dolgozoLista.forEach((dolgozo) => {
    console.log(dolgozo.city);
    
    let tr = document.createElement("tr");
    let tdName =document.createElement("td");    
    let tdCity =document.createElement("td");    
    let tdSalary =document.createElement("td")

    tdName.textContent = dolgozo.name;
    tdCity.textContent = dolgozo.city;
    tdSalary.textContent = dolgozo.salary;

    dolgozoTorzs.append(tr);
    tr.append(tdName, tdCity, tdSalary);
    tr.append(generateDeleteButton(dolgozo.id));
});
}

addButton.addEventListener('click', () => {
    console.log("működik");
    addEmployee();
});

loadEmloyees();

function generateDeleteButton(id){
    let tdDel =document.createElement("td");
    let button =document.createElement("button");
    button.textContent = "Törlés";
    button.classList= "btn btn-primary";
    handleEvents(button, id);
    tdDel.append(button);
    return tdDel;
}

function handleEvents(button, id){
    button.addEventListener('click', () => {
        console.log(id)
    });
}

function addEmployee(){
    dolgozo = {
        name: nameElem.value,
        city: cityElem.value,
        salary: salaryElem.value
    }
    dolgozoLista.push(dolgozo);
    console.log(dolgozoLista);

    clearFields();
    dolgozoTorzs.innerHTML = '';  //vagy text.content inner helyett
    loadEmloyees();
}

function clearFields(){
    nameElem.value = '',
    cityElem.value = '',
    salaryElem.value = ''
}