import React, { useEffect, useState } from 'react';
import SortableDataTable from '../components/SortableDataTable';

const columns = [
    { name: 'First Name', selector: row => row.firstName, sortable: true },
    { name: 'Last Name', selector: row => row.lastName, sortable: true },
    {
        name: 'Start Date',
        selector: row => new Date(row.startDate).toLocaleString(),
        sortable: true,
        sortFunction: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
    },
    {
        name: 'Department',
        selector: row => row.department ? row.department.label : '',
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: row => new Date(row.dateOfBirth).toLocaleString(),
        sortable: true,
        sortFunction: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
    },
    { name: 'Street', selector: row => row.street, sortable: true },
    { name: 'City', selector: row => row.city, sortable: true },
    {
        name: 'State',
        selector: row => row.state ? row.state.label : '',
        sortable: true,
    },
    { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
];


const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    return (
        <div className="container">
            <h1>Current Employees</h1>
            <SortableDataTable
                columns={columns}
                data={employees}
            />
            <a href="/">Home</a>
        </div>
    );
};

export default EmployeeList;
