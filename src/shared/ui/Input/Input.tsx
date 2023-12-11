import React, { InputHTMLAttributes, memo, ReactNode } from 'react';
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
}
export enum LabelPosition {
    top = 'top-label',
    left = 'left-label',
    right = 'right-label',
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
    labelPosition?:LabelPosition,
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
        labelPosition = LabelPosition.top,
        ...otherProps
    } = props;

    const classes: string[] = [cls[size], cls[theme]];

    const [field, form] = useField<string>(name);
    const isValidValue = !form.error;

    const mods: Mods = {
        [cls.disabled]: otherProps.disabled,
        [cls.valid]: isValidValue,
    };

    const getId = (): string => {
        if (otherProps.type === 'radio' || otherProps.type === 'checkbox') {
            return idOption(name, otherProps.value || '', id);
        }
        return idInput(name, id);
    };

    const InputComponent = mask ? (
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
    );

    return (
        <div className={classNames(
            cls.Wrapper,
            {},
            [className],
        )}
        >
            <div className={classNames(
                cls.wrapperInputLabel,
                {},
                [cls[labelPosition]],
            )}
            >
                {label && (
                    <label htmlFor={name} className={cls.label}>
                        {label}
                    </label>
                )}

                {InputComponent}
            </div>

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
