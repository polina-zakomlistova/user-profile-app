import React from 'react';
import { FieldArray, FormikConsumer } from 'formik';
import Input, { ThemeInput } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ErrorMessage } from 'shared/ui/ErrorMessage/ErrorMessage';
import PlusIcon from 'shared/assets/icons/Plus.svg';
import DeleteIcon from 'shared/assets/icons/Delete.svg';

import cls from './FieldArrayCustom.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface FieldProps {
    name: string;
    list: string[];
    label?: string;
    labelInput?: string;
    themeInput?: ThemeInput;
    onChangeHandle?: () => void;
}

const FieldArrayCustom: React.FC<FieldProps> = ({
    name,
    list,
    label,
    labelInput,
    themeInput,
    onChangeHandle,
}) => {
    return (
        <FieldArray name={name}>
            {({ push, remove, form: { values } }) => (
                <>
                    <h3>{label}</h3>
                    <ul>
                        {list.length > 0 &&
                            list.map((valueInput, index) => (
                                <>
                                    <li
                                        key={index}
                                        className={cls.inputWrapper}
                                    >
                                        <Input
                                            name={`${name}.${index}`}
                                            id={(index + 1).toString()}
                                            label={labelInput}
                                            theme={themeInput}
                                            onBlur={onChangeHandle}
                                        />

                                        <Button
                                            type="button"
                                            theme={ThemeButton.DELETE}
                                            onClick={(e) => {
                                                remove(index);
                                                onChangeHandle();
                                            }}
                                            name="remove"
                                            id={(index + 1).toString()}
                                        >
                                            {<DeleteIcon />}
                                        </Button>
                                    </li>
                                    <ErrorMessage name={`${name}.${index}`} />
                                </>
                            ))}
                        <Button
                            type="button"
                            name="add"
                            theme={ThemeButton.ADD}
                            onClick={() => {
                                push('');
                                onChangeHandle();
                            }}
                        >
                            {<PlusIcon />}
                        </Button>
                    </ul>
                </>
            )}
        </FieldArray>
    );
};

export default FieldArrayCustom;
