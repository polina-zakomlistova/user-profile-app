import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ButtonLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { idButton } from 'shared/lib/names/names';

export enum ThemeButtonLink {
    COLOR = 'color',
}

interface ButtonLinkProps extends LinkProps {
    name: string;
    className?: string;
    theme?: ThemeButtonLink;
}

export const ButtonLink: FC<ButtonLinkProps> = (props) => {
    const { to, id, name, className, children, theme, ...otherProps } = props;

    return (
        <Link
            to={to}
            id={idButton(name, id)}
            className={classNames(cls.link, { [cls[theme]]: true }, [
                className,
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
