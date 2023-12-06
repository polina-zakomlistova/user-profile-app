import { FormikConsumer } from 'formik';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { ICheckboxListType } from 'entities/User/model/types/user';
import { FC } from 'react';
import cls from './CheckboxList.module.scss';

interface CheckboxListProps {
    name: string;
    label?: string;
    list: ICheckboxListType;
}

export const CheckboxList = (props:CheckboxListProps) => {
    const { name, label, list } = props;
    return (
        <div className={cls.wrapper}>
            <h3>{label}</h3>
            <div role="group" aria-labelledby="checkbox-group">
                {list.map((item) => (
                    <Input
                        key={item.name}
                        className={cls.item}
                        type="checkbox"
                        theme={InputTheme.CHECKBOX}
                        name={name}
                        value={item.name}
                        label={item.label}
                    />
                ))}
            </div>
        </div>
    );
};
