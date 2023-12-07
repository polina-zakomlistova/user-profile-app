import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import { InputSize, InputTheme } from 'shared/ui/Input/Input';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { idInput, idOption } from 'shared/lib/names/names';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string|undefined;
    label: string;
    id?: string
}
type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'| 'onChange' | 'readOnly'|'size'>

interface SelectFieldProps extends HTMLSelectProps {
    className?: string;
    value?: string;
    name: string;
    label: string;
    onChange?: (value: string) => void;
    options: SelectOption[];
    readonly?: boolean;
    theme?: InputTheme;
    useErrorMessage?: boolean;
}

const Select = (props:SelectFieldProps) => {
    const {
        name,
        label,
        options,
        className = '',
        onChange,
        id,
        value,
        readonly,
        theme = InputTheme.COLOR,
        useErrorMessage = true,
        ...otherProps
    } = props;

    const [field] = useField<string>(name);

    const mods: Mods = {
        [cls.disabled]: otherProps.disabled,
    };

    const classes: string[] = [className, cls[theme]];

    return (
        <>
            <label htmlFor={name} className={cls.label}>
                {label}
            </label>
            <Field
                {...field}
                as="select"
                className={classNames(
                    cls.select,
                    mods,
                    classes,
                )}
                id={idOption(name, value || '', id)}
                disabled={readonly}
                {...otherProps}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        id={idOption(name, option.label || '', option.id)}
                    >
                        {option.label}
                    </option>
                ))}
            </Field>
            {useErrorMessage
                ? (
                    <ErrorMessage
                        render={(msg) => <div className={cls.errorMessage}>{msg}</div>}
                        name={name}
                    />
                )
                : null}
        </>

    );
};

export default Select;
