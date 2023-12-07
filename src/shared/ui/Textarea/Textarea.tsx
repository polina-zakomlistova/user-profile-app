import React, { FC, InputHTMLAttributes } from 'react';
import { Field, useFormikContext } from 'formik';
import { idInput } from 'shared/lib/names/names';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

interface TextareaProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label?: string;
    className?: string;
}

export const Textarea: FC<TextareaProps> = (props) => {
    const {
        name, className, label, ...otherProps
    } = props;

    const { values } = useFormikContext<Record<string, any>>();

    return (
        <div className={cls.wrapper}>
            {label && (
                <label htmlFor={name} className={cls.label}>
                    {label}
                </label>
            )}
            <Field
                name={name}
                as="textarea"
                id={idInput(name)}
                className={classNames(
                    cls.textarea,
                    { },
                    [className],
                )}
                {...otherProps}
            />
            <div className={cls.tip}>
                Tip:
                {values[name]?.replace(/ /g, '').length || 0}
            </div>
        </div>
    );
};

export default TextareaProps;
