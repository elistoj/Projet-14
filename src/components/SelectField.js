import React from 'react';
import Select from 'react-select';

const SelectField = ({ label, name, options, selectedOption, onChange }) => (
    <>
        <label htmlFor={name}>{label}</label>
        <Select
            id={name}
            name={name}
            value={selectedOption}
            onChange={onChange}
            options={options}
            placeholder={`Select ${label}`}
        />
    </>
);

export default SelectField;
