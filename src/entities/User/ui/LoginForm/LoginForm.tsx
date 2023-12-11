import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Form } from 'formik';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { SelectOption } from 'shared/ui/Select/Select';
import { Sex } from 'entities/User/model/types/user';
import { memo } from 'react';
import cls from './LoginForm.module.scss';

interface Step1FormProps {
    className?: string;
    onNextStep?:()=>void;
    isValid?:boolean
}

const sexOptions: SelectOption[] = Object.values(Sex).map((value) => ({
    value,
    label: value,
    id: `field-sex-option-${value}`,
}));

export const LoginForm = memo((props: Step1FormProps) => {
    const { className, onNextStep, isValid } = props;
    const { t } = useTranslation();

    const mods:Mods = {};

    return (
        <Form>
            <div className={classNames('input-wrapper', {}, [])}>
                <Input
                    type="phone"
                    name="phone"
                    mask="+7 (999) 999-99-99"
                    maskChar="_"
                    placeholder="+7 (999) 999-99-99"
                    label="Номер телефона"
                    theme={InputTheme.COLOR}
                    className={cls.margin}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="tim.jennings@example.com"
                    label="Email"
                    theme={InputTheme.COLOR}
                />
            </div>

        </Form>

    );
});
