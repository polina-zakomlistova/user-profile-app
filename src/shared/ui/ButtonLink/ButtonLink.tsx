import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo } from 'react';
import { idButton } from 'shared/lib/names/names';
import cls from './ButtonLink.module.scss';

export enum ButtonLinkTheme {
    COLOR = 'color',
}

interface ButtonLinkProps extends LinkProps {
    name: string;
    className?: string;
    theme?: ButtonLinkTheme;
}

export const ButtonLink = memo((props:ButtonLinkProps) => {
    const {
        to,
        id,
        name,
        className,
        children,
        theme = ButtonLinkTheme.COLOR,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            id={idButton(name, id)}
            className={classNames(cls.link, {}, [
                className, cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
