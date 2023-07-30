export default function createReportObject(employeesList) {
    return {
        [employeesList]: allEmployees,
        getNumberOfDepartments(employeesList){
            return Object.entries(employeesList).length;
        }
    }

}