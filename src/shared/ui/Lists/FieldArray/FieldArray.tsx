import React from 'react';
import { ErrorMessage, FieldArray } from 'formik';
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
}) => {
    return (
        <FieldArray name={name}>
            {({ push, remove, form: { touched, errors, values } }) => (
                <div>
                    {values[name].map((valueInput: string, index: number) => (
                        <div key={index} className={cls.inputWrapper}>
                            <Input
                                name={`${name}.${index}`}
                                label={labelInput}
                                theme={themeInput}
                                onBlur={() => {
                                    onChangeInput(name, values[name]);
                                }}
                            />
                            <Button
                                type="button"
                                theme={ThemeButton.DELETE}
                                onClick={() => {
                                    remove(index);
                                }}
                                id={`button-remove-${index}`}
                            >
                                {<DeleteIcon />}
                            </Button>
                        </div>
                    ))}
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
