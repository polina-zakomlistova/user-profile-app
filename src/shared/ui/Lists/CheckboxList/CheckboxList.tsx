import React from 'react';
import { Field, FormikConsumer, FormikValues } from 'formik';

import cls from './CheckboxList.module.scss';
import { CheckboxType } from 'entities/User/model/types/userShema';
import Input, { ThemeInput } from 'shared/ui/Input/Input';

interface CheckboxListProps {
    name?: string;
    onChangeHandler?: () => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({
    name,
    onChangeHandler,
}) => {
    return (
        <FormikConsumer>
            {({ values, setFieldValue }) => (
                <div>
                    <h3>{name}</h3>
                    {Object.entries(values[name]).map(([key, value], index) => (
                        <div key={index} className={cls.inputWrapper}>
                            <Input
                                type="checkbox"
                                theme={ThemeInput.CHECKBOX}
                                name={key}
                                //value={value.toString()}
                                label={key}
                                onBlur={onChangeHandler}
                            />
                        </div>
                    ))}
                </div>
            )}
        </FormikConsumer>
    );
};

export default CheckboxList;
