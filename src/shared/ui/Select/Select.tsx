import React from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import cls from './Select.module.scss';

interface SelectFieldProps {
    name: string;
    label: string;
    options: { value: string; label: string; id?: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ name, label, options }) => {
    const [field] = useField(name);

    return (
        <label htmlFor={name} className={cls.label}>
            {label}
            <Field
                as="select"
                name={name}
                className={cls.select}
                {...field}
                id={name}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        id={option.id || option.label}
                    >
                        {option.label}
                    </option>
                ))}
            </Field>
        </label>
    );
};

export default SelectField;
