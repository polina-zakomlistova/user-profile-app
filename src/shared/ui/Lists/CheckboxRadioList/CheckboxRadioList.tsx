import {
    Input, InputSize, InputTheme, LabelPosition,
} from 'shared/ui/Input/Input';
import { ICheckboxRadioListType } from 'entities/User/model/types/user';
import { classNames } from 'shared/lib/classNames/classNames';
import { ErrorMessage } from 'formik';
import React from 'react';
import cls from './CheckboxRadioList.module.scss';

interface CheckboxListProps {
    name: string;
    label?: string;
    className?: string;
    list: ICheckboxRadioListType;
    type: 'checkbox'|'radio';
    useErrorMessage?: boolean;
}

export const CheckboxRadioList = (props:CheckboxListProps) => {
    const {
        name, label, list, type, className, useErrorMessage = true,
    } = props;
    return (
        <div className={classNames(
            cls.wrapper,
            {},
            [className],
        )}
        >
            <h3 className={cls.title}>{label}</h3>
            {list?.length > 0 && (
                <ul className={cls.list} role="group" aria-labelledby="checkbox-group">
                    {list.map((item) => (
                        <li className={cls.item}>
                            <Input
                                key={item.name}
                                id={item.name}
                                type={type}
                                theme={InputTheme.CHECKBOX}
                                name={name}
                                value={item.name}
                                label={item.label}
                                labelPosition={LabelPosition.right}
                                useErrorMessage={false}
                            />
                        </li>

                    ))}
                </ul>
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
};
