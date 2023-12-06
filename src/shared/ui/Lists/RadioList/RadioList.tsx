import { Field, FormikConsumer } from 'formik';

import { Input, InputTheme } from 'shared/ui/Input/Input';
import { IRadioListType } from 'entities/User/model/types/user';
import cls from './RadioList.module.scss';

interface RadioListProps {
    name: string;
    label?: string;
    list?: IRadioListType;
}

export const RadioList = (props: RadioListProps) => {
    const {
        name,
        label,
        list,
    } = props;
    return (
        <div>
            <h3>{label}</h3>
            <div role="group" aria-labelledby="my-radio-group">
                {list && list.map((item) => (
                    <Input
                        className={cls.item}
                        key={item.name}
                        id={item.name}
                        type="radio"
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
