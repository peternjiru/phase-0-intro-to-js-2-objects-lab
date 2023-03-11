const employee = {
    name: "Sam",
    streetAddress: "12th Avenue",
};

console.log(employee);

function updateEmployeeWithKeyAndValue(employeeClone, key, value) {
    employeeClone = { ...employee };
    employeeClone[key] = value;
    return employeeClone;
};

const employeeCopy = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Tom")

function deleteFromEmployeeByKey(employee, key) {
    const employeeCopy2 = { ...employee };
    delete employeeCopy2[key];
    return employeeCopy2;
}

const newEmployee = deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, "name");

