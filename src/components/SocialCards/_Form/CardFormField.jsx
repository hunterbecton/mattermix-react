import React, { forwardRef } from 'react';

import CardFormFieldContainer from './CardFormFieldContainer';

const CardFormField = forwardRef(
  ({ name, label, defaultValue, placeholder, width }, ref) => {
    return (
      <CardFormFieldContainer width={width}>
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          ref={ref}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </CardFormFieldContainer>
    );
  }
);

export default CardFormField;
