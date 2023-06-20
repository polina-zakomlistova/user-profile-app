import React from 'react';
import { Field } from 'formik';
import InputMask from 'react-input-mask';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { ChangeEvent } from 'react';

export enum ThemeInput {
    COLOR = 'color',
}
interface InputProps {
    name: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    type?: string;
    mask?: string;
    maskChar?: string;
    placeholder?: string;
    theme?: ThemeInput;
}

const Input: React.FC<InputProps> = (props) => {
    const {
        name,
        label,
        value,
        onChange,
        type = 'text',
        placeholder,
        mask,
        maskChar,
        theme,
    } = props;
    return (
        <div>
            {label && (
                <label htmlFor={name} className={cls.label}>
                    {label}
                </label>
            )}

            {type === 'phone' && mask ? (
                <Field name={name}>
                    {({
                        field,
                    }: {
                        field: {
                            value: string;
                            onChange: (e: React.ChangeEvent<any>) => void;
                        };
                    }) => (
                        <InputMask
                            {...field}
                            className={classNames(
                                cls.input,
                                { [cls[theme]]: true },
                                []
                            )}
                            mask={mask}
                            maskChar={maskChar}
                            placeholder={placeholder}
                            autoComplete="off"
                            id={`field-${name}`}
                            type="text"
                            onChange={onChange}
                            value={value}
                        />
                    )}
                </Field>
            ) : (
                <Field
                    name={name}
                    onChange={onChange}
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    className={classNames(
                        cls.input,
                        { [cls[theme]]: true },
                        []
                    )}
                    value={value}
                />
            )}
        </div>
    );
};

export default Input;
