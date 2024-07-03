// Problem 1: Create JSON for each employee
let employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];

console.log("Problem 1: Employees JSON");
console.log(employees);

// Problem 2: Create JSON for the company
let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("Problem 2: Company JSON");
console.log(company);

// Problem 3: Add a new employee
let newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};

company.employees.push(newEmployee);

console.log("Problem 3: Updated Company JSON with new employee");
console.log(company);

// Problem 4: Calculate total salary for all employees
let totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);

console.log("Problem 4: Total Salary of all employees");
console.log(totalSalary);

// Problem 5: Update salaries for raise eligible employees and set eligibility to false
function updateSalaries(company) {
    company.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.10;
            employee.raiseEligible = false;
        }
    });
}

updateSalaries(company);

console.log("Problem 5: Company JSON after salary update");
console.log(company);

// Problem 6: Update working from home status
let wfhEmployees = ['Anna', 'Sam'];

company.employees.forEach(employee => {
    employee.wfh = wfhEmployees.includes(employee.firstName);
});

console.log("Problem 6: Company JSON with work from home status");
console.log(company);
