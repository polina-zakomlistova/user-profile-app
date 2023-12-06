import React, { InputHTMLAttributes, memo } from 'react';
import InputMask from 'react-input-mask';
import { useField, ErrorMessage, Field } from 'formik';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { idInput, idOption } from 'shared/lib/names/names';
import cls from './Input.module.scss';

export enum InputTheme {
    COLOR = 'color',
    VALID = 'valid',
    CHECKBOX = 'checkbox',
}

export enum InputSize {
    S = 'size-s',
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

interface InputProps extends HTMLInputProps{
    name: string;
    label?: string;
    mask?: string;
    maskChar?: string;
    theme?: InputTheme;
    useErrorMessage?: boolean;
    size?:InputSize,
}

export const Input = memo((props: InputProps) => {
    const {
        name,
        label,
        mask,
        maskChar,
        theme = InputTheme.COLOR,
        id,
        className = '',
        useErrorMessage = true,
        size = InputSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: otherProps.disabled,
    };

    const classes: string[] = [className, cls[theme], cls[size]];
    const [field] = useField<string>(name);

    const getId = (): string => {
        if (otherProps.type === 'radio' || otherProps.type === 'checkbox') {
            return idOption(name, otherProps.value || '', id);
        }
        return idInput(name, id);
    };
    return (
        <div className={cls.Wrapper}>
            {label && (
                <label htmlFor={name} className={cls.label}>
                    {label}
                </label>
            )}

            {mask ? (
                <InputMask
                    {...field}
                    className={classNames(
                        cls.input,
                        mods,
                        classes,
                    )}
                    name={name}
                    mask={mask}
                    maskChar={maskChar}
                    autoComplete="on"
                    id={getId()}
                    {...otherProps}
                />

            ) : (
                <Field
                    {...field}
                    name={name}
                    id={getId()}
                    className={classNames(
                        cls.input,
                        mods,
                        classes,
                    )}
                    {...otherProps}
                />
            )}

            {useErrorMessage
                ? (
                    <ErrorMessage
                        render={(msg) => <div className={cls.errorMessage}>{msg}</div>}
                        name={name}
                    />
                )
                : null}

        </div>
    );
});
