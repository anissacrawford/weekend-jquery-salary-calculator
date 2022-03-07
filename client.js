// console.log('hi!')

let employees = [];

$(ready);

function ready(){

    // console.log('hi')
    $('#submitBtn').on('click', addEmployee);
    $('body').on('click', '.deleteBtn', deleteBtn);

};

function addEmployee (){

    //creates new employee with inputs 
    let newEmployee = {
        firstName: $(firstName).val(),
        lastName: $(lastName).val(),
        id: Number($(id).val()),
        title: $(title).val(),
        salary: Number($(salary).val()),
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
    //could also use $('input').val('') to clear all inputs at once 

    addToDom();
};

//adds table with inputs to DOM 
function addToDom(){

$('#tableBody').empty()

for (let employee of employees){
    $('#tableBody').append(
        `<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td><button class="deleteBtn">DELETE</button></td>
        </tr>`
    )
    }
    calcMonthlyCost();

};

//calculates Monthly Cost 
function calcMonthlyCost(){
    let monthlyCost = 0;

    //need inputs of all salaries divided by 12 
    for (let employee of employees){
        monthlyCost += employee.salary;
    }

    let totalMonthlyCost = monthlyCost / 12;

    if (totalMonthlyCost >= 20000){
        $('#totalMonthly').addClass('highlight');
    }

    $('#totalMonthly').empty();
    $('#totalMonthly').append(totalMonthlyCost);
};

//need delete button 
 function deleteBtn (){
    //  $('#deleteBtn').remove(${employee.salary}) //cant get button working
    $(this).closest('tr').remove();
    // employees.pop() //delete employee
 }


