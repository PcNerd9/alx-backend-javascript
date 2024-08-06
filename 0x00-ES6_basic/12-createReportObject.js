export default function createReportObject(employeesList) {
    const employeeReport = {
        allEmployees: { ...employeesList},

        getNumberOfDepartment(employeesList) {
            var counter = 0;
            for (let key in employeesList) {
                counter += 1;
            }
            
            return counter;
        }
    }

    return employeeReport;
}