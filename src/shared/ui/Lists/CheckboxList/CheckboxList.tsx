import { FormikConsumer, useFormikContext } from 'formik';

import cls from './CheckboxList.module.scss';
import Input, { ThemeInput } from 'shared/ui/Input/Input';
import { ICheckboxListType } from 'entities/User/model/types/userShema';

interface CheckboxListProps {
    name: string;
    label?: string;
    list: ICheckboxListType;
    onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({
    name,
    label,
    list,
    onChangeHandler,
}) => {
    return (
        <FormikConsumer>
            {() => (
                <div className={cls.wrapper}>
                    <h3>{label}</h3>
                    <ul className={cls.list}>
                        {list.map((item) => (
                            <li key={item.name} className={cls.item}>
                                <Input
                                    type="checkbox"
                                    theme={ThemeInput.CHECKBOX}
                                    name={name}
                                    value={item.name}
                                    label={item.label}
                                    onBlur={onChangeHandler}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </FormikConsumer>
    );
};

export default CheckboxList;
