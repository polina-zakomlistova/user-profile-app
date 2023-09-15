import { FormikConsumer } from 'formik';

import cls from './RadioList.module.scss';
import Input, { ThemeInput } from 'shared/ui/Input/Input';
import { IRadioListType } from 'entities/User/model/types/userShema';

interface RadioListProps {
    name: string;
    label?: string;
    list: IRadioListType;
    onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioList: React.FC<RadioListProps> = ({
    name,
    label,
    list,
    onChangeHandler,
}) => {
    return (
        <FormikConsumer>
            {({ values }) => (
                <div>
                    <h3>{label}</h3>
                    <ul className={cls.list}>
                        {list.map((item) => (
                            <li className={cls.item} key={item.name}>
                                <Input
                                    type="radio"
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

export default RadioList;
