import React from 'react';
import { ErrorMessage, FieldArray, Field } from 'formik';
import Input, { ThemeInput } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import PlusIcon from 'shared/assets/icons/Plus.svg';
import DeleteIcon from 'shared/assets/icons/Delete.svg';

import cls from './FieldArray.module.scss';

interface FieldProps {
    name: string;
    labelInput?: string;
    themeInput?: ThemeInput;
}

const FieldArrayCustom: React.FC<FieldProps> = ({
    name,
    labelInput,
    themeInput,
}) => {
    return (
        <FieldArray name={name}>
            {({ push, remove, form: { values } }) => (
                <div>
                    {values[name].map((valueInput: string, index: number) => (
                        <div key={index} className={cls.inputWrapper}>
                            <Field
                                name={`${name}-${index}`}
                                //name={name}
                                //id={(index + 1).toString()}
                                //label={labelInput}
                                //theme={themeInput}
                            />
                            <Button
                                type="button"
                                theme={ThemeButton.DELETE}
                                onClick={(e) => {
                                    remove(index);
                                    console.log(values);
                                }}
                                name="remove"
                                id={(index + 1).toString()}
                            >
                                {<DeleteIcon />}
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        name="add"
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
