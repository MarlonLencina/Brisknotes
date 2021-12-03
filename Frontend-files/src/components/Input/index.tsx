import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Input, ErrorInput } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
}

const InputComponent: React.FC<InputProps> = ({ type, name, ...rest }) => {
  const inputRef = useRef(null);

  const [value, setValue] = useState('');
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Input isFilled={!!value}>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        name={name}
        ref={inputRef}
        {...rest}
        type={type}
      />
      {error && (
        <ErrorInput>
          <Icon icon="akar-icons:circle-alert" />
          <div>
            <p>{error}</p>
          </div>
        </ErrorInput>
      )}
    </Input>
  );
};

export default InputComponent;
