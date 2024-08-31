import React, { useState } from 'react';
import DatePickerField from '../components/DatePickerField';
import SelectField from '../components/SelectField';
import AddressForm from '../components/AddressForm';
import Modal from 'react-modal-component-eli';
import states from '../utils/states';

const departments = [
    { label: "Sales", value: "Sales" },
    { label: "Marketing", value: "Marketing" },
    { label: "Human Resources", value: "Human Resources" },
    { label: "Engineering", value: "Engineering" },
    { label: "Legal", value: "Legal" },
];

const CreateEmployee = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        startDate: null,
        street: '',
        city: '',
        state: null,
        zipCode: '',
        department: null
    });
    const [isModalOpen, setIsModalOpen] = useState(false);  

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleDateChange = (date, key) => {
        setFormData({
            ...formData,
            [key]: date
        });
    };

    const handleSelectChange = (selectedOption, { name }) => {
        setFormData({
            ...formData,
            [name]: selectedOption
        });
    };

    const convertToUTC = (date) => {
        if (!date) return null;
        return new Date(date).toISOString();  
    };

    const saveEmployee = () => {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const newEmployee = {
            ...formData,
            startDate: convertToUTC(formData.startDate),
            dateOfBirth: convertToUTC(formData.dateOfBirth),
        };
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));
        setIsModalOpen(true);  
    };

    const closeModal = () => {
        setIsModalOpen(false);  
    };

    return (
        <div className="container">
            <h2>Create Employee</h2>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} />

                <DatePickerField
                    label="Date of Birth"
                    selectedDate={formData.dateOfBirth}
                    onChange={(date) => handleDateChange(date, 'dateOfBirth')}
                />

                <DatePickerField
                    label="Start Date"
                    selectedDate={formData.startDate}
                    onChange={(date) => handleDateChange(date, 'startDate')}
                />

                <AddressForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                    states={states}
                />

                <SelectField
                    label="Department"
                    name="department"
                    options={departments}
                    selectedOption={formData.department}
                    onChange={handleSelectChange}
                />

                <button type="button" onClick={saveEmployee}>Save</button>
            </form>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Employee Created</h2>
            </Modal>
        </div>
    );
};

export default CreateEmployee;
