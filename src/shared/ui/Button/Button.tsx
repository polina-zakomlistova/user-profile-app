import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    COLOR = 'color',
    DELETE = 'delete',
    ADD = 'add',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
    id: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, theme, id, ...otherProps } = props;

    return (
        <button
            className={classNames(cls.button, { [cls[theme]]: true }, [])}
            id={id}
            {...otherProps}
        >
            {children}
        </button>
    );
};
