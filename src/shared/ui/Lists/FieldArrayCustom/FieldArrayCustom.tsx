import React from 'react';
import { ErrorMessage, FieldArray, useField } from 'formik';
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
    useErrorMessage?:boolean;
}

export const FieldArrayCustom = (props: FieldProps) => {
    const {
        name,
        list,
        label,
        labelInput,
        themeInput,
        className,
        useErrorMessage = true,
    } = props;

    const [field, form] = useField<string>(name);
    console.log(field, form);

    return (
        <FieldArray
            name={name}
            render={(arrayHelpers) => (
                <div className={classNames(
                    cls.wrapper,
                    {},
                    [className],
                )}
                >
                    <h3 className={cls.title}>{label}</h3>

                    {!!list?.length
                        && (
                            <div className={cls.list}>
                                {
                                    list.map((valueInput, index) => (
                                        <div
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
                                                    arrayHelpers.remove(index);
                                                }}
                                                name="remove"
                                                id={(index + 1).toString()}
                                            >
                                                <DeleteIcon className={cls.delete} />
                                            </Button>
                                        </div>
                                    ))
                                }
                            </div>
                        )}

                    <ErrorMessage
                        render={(msg) => <div className={cls.errorMessage}>{msg}</div>}
                        name={name}
                    />

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
                            arrayHelpers.push('');
                        }}
                    >
                        <PlusIcon className={cls.plus} />
                    </Button>

                </div>
            )}
        />
    );
};
