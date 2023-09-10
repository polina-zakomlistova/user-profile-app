import React from 'react';
import { FieldArray } from 'formik';
import Input, { ThemeInput } from 'shared/ui/Input/Input';

import cls from './CheckboxList.module.scss';

interface CheckboxListProps {
    name: string;
    theme?: ThemeInput;
    onChangeCheckbox: (field: string, value: boolean[]) => void;
}

type CheckboxOption = {
    value: boolean;
    label: string;
};

const CheckboxList: React.FC<CheckboxListProps> = ({
    name,
    onChangeCheckbox,
    theme,
}) => {
    return (
        <FieldArray name={name}>
            {({ form: { values } }) => (
                <div>
                    {values[name].map(
                        (valueInput: CheckboxOption, index: number) => (
                            <div key={index} className={cls.inputWrapper}>
                                <Input
                                    name={`${name}.${index}`}
                                    label={valueInput.label}
                                    type="checkbox"
                                    theme={theme}
                                    onBlur={() => {
                                        onChangeCheckbox(name, values[name]);
                                    }}
                                />
                            </div>
                        )
                    )}
                </div>
            )}
        </FieldArray>
    );
};

export default CheckboxList;
