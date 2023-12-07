import React from 'react';
import { FieldArray } from 'formik';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import PlusIcon from 'shared/assets/icons/Plus.svg';
import DeleteIcon from 'shared/assets/icons/Delete.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FieldArrayCustom.module.scss';

interface FieldProps {
    name: string;
    list?: string[];
    label?: string;
    labelInput?: string;
    themeInput?: InputTheme;
    className?: string;
}

export const FieldArrayCustom = (props: FieldProps) => {
    const {
        name,
        list,
        label,
        labelInput,
        themeInput,
        className,
    } = props;
    return (
        <FieldArray name={name}>
            {({ push, remove, form: { values } }) => (
                <div className={classNames(
                    cls.wrapper,
                    {},
                    [className],
                )}
                >
                    <h3 className={cls.title}>{label}</h3>
                    <ul className={cls.list}>
                        {list
                            && list.map((valueInput, index) => (
                                <li
                                    key={`${name}.${index}`}
                                    className={cls.inputWrapper}
                                >
                                    <Input
                                        name={`${name}.${index}`}
                                        id={(index + 1).toString()}
                                        label={labelInput}
                                        theme={themeInput}
                                    />

                                    <Button
                                        className={cls.buttonDelete}
                                        type="button"
                                        theme={ButtonTheme.DELETE}
                                        onClick={(e) => {
                                            remove(index);
                                        }}
                                        name="remove"
                                        id={(index + 1).toString()}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </li>
                            ))}
                    </ul>
                    <Button
                        className={classNames(
                            cls.buttonAdd,
                            { [cls.mrgAdd]: (!!list?.length) },
                            [],
                        )}
                        type="button"
                        name="add"
                        theme={ButtonTheme.ADD}
                        onClick={() => {
                            push('');
                        }}
                    >
                        <PlusIcon />
                    </Button>

                </div>
            )}
        </FieldArray>
    );
};
