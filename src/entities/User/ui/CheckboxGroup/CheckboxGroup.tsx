import React from 'react';
import { FieldArray } from 'formik';
import Input, { ThemeInput } from 'shared/ui/Input/Input';

interface FieldProps {
    name: string;
    labelInput?: string;
    themeInput?: ThemeInput;
    onChangeInput: (field: string, value: string[]) => void;
}

const CheckboxGroup: React.FC<FieldProps> = ({
    name,
    labelInput,
    onChangeInput,
    themeInput,
    children,
}) => {
    return (
        <FieldArray name={name}>
            {({ form }) => (
                <div>
                    {form.values[name].map(
                        (valueInput: string, index: number) => (
                            <div key={index}>
                                <Input
                                    name={`${name}-${index}`}
                                    label={labelInput}
                                    type="checkbox"
                                    theme={themeInput}
                                    value={valueInput}
                                    onChange={(e) => {
                                        const updatedArray = [
                                            ...form.values[name],
                                        ];
                                        updatedArray[index] =
                                            updatedArray[index] +
                                            e.target.value;
                                        onChangeInput(name, updatedArray);
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

export default CheckboxGroup;
