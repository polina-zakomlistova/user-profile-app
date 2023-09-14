import { FormikConsumer } from 'formik';

import cls from './CheckboxList.module.scss';
import Input, { ThemeInput } from 'shared/ui/Input/Input';

interface CheckboxListProps {
    name?: string;
    onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CheckboxItem {
    name: string;
    label: string;
    checked: boolean;
}

const CheckboxList: React.FC<CheckboxListProps> = ({
    name,
    onChangeHandler,
}) => {
    return (
        <FormikConsumer>
            {({ values }) => (
                <div className={cls.wrapper}>
                    <h3>{name}</h3>
                    <ul className={cls.list}>
                        {values[name].map((item: CheckboxItem) => (
                            <li key={item.name} className={cls.item}>
                                <Input
                                    type="checkbox"
                                    theme={ThemeInput.CHECKBOX}
                                    name={`${name}.${item.name}`}
                                    label={item.label}
                                    checked={item.checked}
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
