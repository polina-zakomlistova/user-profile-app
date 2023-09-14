import React, { InputHTMLAttributes } from 'react';
import { Field, useField } from 'formik';
import InputMask from 'react-input-mask';
import { classNames } from 'shared/lib/classNames/classNames';
import { idInput } from 'shared/lib/names/names';
import cls from './Input.module.scss';

export enum ThemeInput {
    COLOR = 'color',
    VALID = 'valid',
    CHECKBOX = 'checkbox',
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
        mask,
        maskChar,
        theme,
        children,
        id,
        className,
        ...otherProps
    } = props;

    const [field] = useField(props);

    return (
        <div className={cls.inputWrapper}>
            {label && (
                <label htmlFor={name} className={cls.label}>
                    {label}
                </label>
            )}

            {mask ? (
                <Field name={name}>
                    {({ field }: { field: {} }) => (
                        <InputMask
                            {...field}
                            className={classNames(
                                cls.input,
                                { [cls[theme]]: true },
                                [className]
                            )}
                            mask={mask}
                            maskChar={maskChar}
                            autoComplete="on"
                            id={idInput(name, id)}
                            {...otherProps}
                        >
                            {children}
                        </InputMask>
                    )}
                </Field>
            ) : (
                <Field
                    {...field}
                    name={name}
                    id={idInput(name, id)}
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
