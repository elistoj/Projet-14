import React from 'react';
import SelectField from './SelectField';

const AddressForm = ({ formData, handleChange, handleSelectChange, states }) => (
    <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={formData.street} onChange={handleChange} />

        <label htmlFor="city">City</label>
        <input type="text" id="city" value={formData.city} onChange={handleChange} />

        <SelectField
            label="State"
            name="state"
            options={states}  // Ensure states is an array of { label, value }
            selectedOption={formData.state}
            onChange={handleSelectChange}
        />

        <label htmlFor="zipCode">Zip Code</label>
        <input type="number" id="zipCode" value={formData.zipCode} onChange={handleChange} />
    </fieldset>
);

export default AddressForm;
