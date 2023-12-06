import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import { idButton } from 'shared/lib/names/names';
import cls from './Button.module.scss';

export enum ButtonTheme {
    COLOR = 'color',
    DISABLED = 'disabled',
    DELETE = 'delete',
    ADD = 'add',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    name: string;
}

export const Button = memo((props:ButtonProps) => {
    const {
        children,
        theme = ButtonTheme.COLOR,
        id,
        name,
        className,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = { [cls.disabled]: disabled };

    return (
        <button
            className={classNames(cls.button, mods, [
                className, cls[theme],
            ])}
            id={idButton(name, id)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
