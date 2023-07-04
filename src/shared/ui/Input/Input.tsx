import React, { InputHTMLAttributes } from 'react';
import { Field, useField } from 'formik';
import InputMask from 'react-input-mask';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { ChangeEvent } from 'react';

export enum ThemeInput {
    COLOR = 'color',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    mask?: string;
    maskChar?: string;
    theme?: ThemeInput;
}

const Input: React.FC<InputProps> = (props) => {
    const {
        name,
        label,
        type = 'text',
        mask,
        maskChar,
        theme,
        children,
        ...otherProps
    } = props;

    const [field] = useField(props);

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
                            autoComplete="off"
                            id={`field-${name}`}
                            {...otherProps}
                        >
                            {children}
                        </InputMask>
                    )}
                </Field>
            ) : (
                <Field
                    {...field}
                    id={`field-${name}`}
                    className={classNames(
                        cls.input,
                        { [cls[theme]]: true },
                        []
                    )}
                    {...otherProps}
                >
                    {children}
                </Field>
            )}
        </div>
    );
};

export default Input;
