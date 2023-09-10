import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';
import { idButton } from 'shared/lib/names/names';

export enum ThemeButton {
    COLOR = 'color',
    DELETE = 'delete',
    ADD = 'add',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
    name: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, theme, id, name, ...otherProps } = props;

    return (
        <button
            className={classNames(cls.button, { [cls[theme]]: true }, [])}
            id={idButton(name, id)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
