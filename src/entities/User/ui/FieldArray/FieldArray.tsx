import React from 'react';
import { FieldArray } from 'formik';
import Input, { ThemeInput } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import PlusIcon from 'shared/assets/icons/Plus.svg';
import DeleteIcon from 'shared/assets/icons/Delete.svg';

import cls from './FieldArray.module.scss';

interface FieldProps {
    name: string;
    labelInput?: string;
    themeInput?: ThemeInput;
    onChangeInput: (field: string, value: string[]) => void;
}

const FieldArrayCustom: React.FC<FieldProps> = ({
    name,
    labelInput,
    onChangeInput,
    themeInput,
    children,
}) => {
    return (
        <FieldArray name={name} render={arrayHelpers =>}>
            {({ form, push, remove }) => (
                <div>
                    {form.values[name].map(
                        (valueInput: string, index: number) => (
                            <div key={index} className={cls.inputWrapper}>
                                <Input
                                    name={`${name}-${index}`}
                                    label={labelInput}
                                    theme={themeInput}
                                    //value={valueInput}
                                    onChange={(e) => {
                                        console.log(form.values[name]);
                                        const currentArray = form.values[name];
                                        const updatedArray = [...currentArray];
                                        updatedArray[index] = e.target.value;
                                        onChangeInput(name, updatedArray);
                                    }}
                                />
                                <Button
                                    type="button"
                                    theme={ThemeButton.DELETE}
                                    onClick={() => remove(index)}
                                    id={`button-remove-${index}`}
                                >
                                    {<DeleteIcon />}
                                </Button>
                            </div>
                        )
                    )}
                    <Button
                        type="button"
                        id="button-add"
                        theme={ThemeButton.ADD}
                        onClick={() => push('')}
                    >
                        {<PlusIcon />}
                    </Button>
                </div>
            )}
        </FieldArray>
    );
};

export default FieldArrayCustom;
