import { FormikConsumer } from 'formik';

import cls from './RadioList.module.scss';
import Input, { ThemeInput } from 'shared/ui/Input/Input';

interface RadioListProps {
    name?: string;
    onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioItem {
    name: string;
    label: string;
    picked: boolean;
}

const RadioList: React.FC<RadioListProps> = ({ name, onChangeHandler }) => {
    return (
        <FormikConsumer>
            {({ values }) => (
                <div>
                    <h3>{name}</h3>
                    <ul className={cls.list}>
                        {values[name].map((item: RadioItem) => (
                            <li className={cls.item} key={item.name}>
                                <Input
                                    type="radio"
                                    theme={ThemeInput.CHECKBOX}
                                    name={name}
                                    label={item.label}
                                    checked={item.picked}
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
