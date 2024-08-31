import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import states from '../utils/states';

const columns = [
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', flex: 1 },
    { field: 'startDate', headerName: 'Start Date', flex: 1 },
    { field: 'street', headerName: 'Street', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'state', headerName: 'State', flex: 1 },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
    { field: 'department', headerName: 'Department', flex: 1 },
];

const stateMap = new Map(states.map(state => [state.value, state.value])); 

const SortableDataTable = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredData = data.filter((item) => {
        const fullName = `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`;
        const state = item.state ? stateMap.get(item.state.value).toLowerCase() : '';
        const department = item.department ? item.department.value.toLowerCase() : '';

        return (
            fullName.includes(searchQuery) ||
            state.includes(searchQuery) ||
            department.includes(searchQuery) ||
            item.city.toLowerCase().includes(searchQuery) ||
            item.street.toLowerCase().includes(searchQuery) ||
            item.zipCode.toLowerCase().includes(searchQuery)
        );
    });

    const formattedData = filteredData.map((item, index) => ({
        id: index,  
        ...item,
        startDate: new Date(item.startDate).toLocaleDateString(),
        dateOfBirth: new Date(item.dateOfBirth).toLocaleDateString(),
        state: item.state ? stateMap.get(item.state.value) : '', 
        department: item.department ? item.department.value : '', 
    }));

    return (
        <div className="data-grid-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
                />
            </div>
            <DataGrid
                rows={formattedData}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                pagination
                disableSelectionOnClick
                autoHeight
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default SortableDataTable;
