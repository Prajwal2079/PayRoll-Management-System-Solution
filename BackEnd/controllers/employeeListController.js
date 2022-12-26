
var employees = require('../data/emplyees.json')

exports.getAll = function (req, res) {
    res.send(employees)
}

exports.insert = function (req, res) {
    var data = req.body;
    // console.log("data inserted successfully");
    var empid = "data.empid";
    var ename = "data.ename";
    var design = "data.design";
    var date = "data.date";
    var emp = { empid, ename, design, date };
    employees.push(emp);
    res.send(emp);
}

exports.getById = function (req, res) {
    var data = parseInt(req.params.empid);
    console.log(data);
    // for (var emp of employees) {
    //     console.log(emp.empid);
    //     if (emp.empid == data) {
    //         console.log("data" + data);
    //         res.send(emp);
    //         res.end();
    //     }
    // }
    var empOb = employees.filter(function (employee) { return employee.empid == data })
    res.send(empOb);
}

