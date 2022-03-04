// console.log('hi!')

let employees = [];

$(ready);

function ready(){

    // console.log('hi')
    $('#submitBtn').on('click', addEmployee);

};

function addEmployee (){

    //creates new employee with inputs 
    let newEmployee = {
        firstName: $(firstName).val(),
        lastName: $(lastName).val(),
        id: $(id).val(),
        title: $(title).val(),
        salary: $(salary).val(),
    }

    //pushes to employees array 
    employees.push(newEmployee);
    console.log(employees);

    // clears values
    $(firstName).val('');
    $(lastName).val('');
    $(id).val('');
    $(title).val('');
    $(salary).val('');

    addToDom();
}


function addToDom(){
for (let employee of employees){
    $('#tableBody').append(
        `<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        </tr>`
    )
    }
}