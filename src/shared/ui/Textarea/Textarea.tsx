import React, { FC } from 'react';
import { Field, useFormikContext } from 'formik';
import { idInput } from 'shared/lib/names/names';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

export enum ThemeButtonLink {}

interface TextareaProps {
    name: string;
    label?: string;
    className?: string;
    theme?: ThemeButtonLink;
    onChangeHandler?: () => void;
}

export const Textarea: FC<TextareaProps> = (props) => {
    const { name, className, theme, label, onChangeHandler } = props;

    const { values } = useFormikContext<Record<string, any>>();

    return (
        <div className={cls.wrapper}>
            <label htmlFor={name} className={cls.label}>
                {label}
                <Field
                    as="textarea"
                    name={name}
                    id={idInput(name)}
                    className={classNames(
                        cls.textarea,
                        { [cls[theme]]: true },
                        [className]
                    )}
                    onBlur={onChangeHandler}
                    value={values[name] || ''}
                />
            </label>
            <div className={cls.tip}>
                Tip: {values[name] ? values[name].length : 0}
            </div>
        </div>
    );
};

export default TextareaProps;
