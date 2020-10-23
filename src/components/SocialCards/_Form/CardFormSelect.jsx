import React from 'react';

import CardFormFieldContainer from './CardFormFieldContainer';

const CardFormSelect = ({
  name,
  label,
  width,
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <CardFormFieldContainer width={width}>
      <label htmlFor={name}>{label}</label>
      <select
        onChange={onChange}
        onKeyDown={(e) => console.log(e)}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </CardFormFieldContainer>
  );
};
export default CardFormSelect;
