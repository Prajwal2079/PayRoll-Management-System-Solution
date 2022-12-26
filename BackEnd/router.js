var employeeListController = require('./controllers/employeeListController')

module.exports = function(app){

    app.route('/employeelist')
    .get(employeeListController.getAll)
    .post(employeeListController.insert)

    app.route('/employeeList/:empid')
    .get(employeeListController.getById)
}