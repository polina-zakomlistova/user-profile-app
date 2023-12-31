import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input, InputSize } from 'shared/ui/Input/Input';
import { UserKeys } from 'entities/User';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { Sex } from 'entities/User/model/types/user';
import { memo } from 'react';

interface Step1FormProps {
    labelStep?: string;
    className?: string;
    onPrevStep?:()=>void;
    onNextStep?:()=>void;
    isValid?:boolean
}

export const Step1Form = memo((props: Step1FormProps) => {
    const {
        labelStep,
        className,
        onPrevStep,
        onNextStep,
        isValid,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    const sexOptions: SelectOption[] = [{
        value: '',
        label: t(' Hе выбрано'),
        id: 'field-sex-option-default',
    }];

    Object.values(Sex).map((value) => (sexOptions.push({
        value,
        label: value,
        id: `field-sex-option-${value}`,
    })));

    const mods:Mods = {};

    return (
        <div className={classNames('input-wrapper', {}, [])}>
            <Input
                name={UserKeys.nickname}
                label={t('Nick name')}
            />
            <Input
                name={UserKeys.name}
                label={t('Имя')}
            />
            <Input
                name={UserKeys.sername}
                label={t('Фамилия')}
            />
            <Select
                name={UserKeys.sex}
                label={t('Пол')}
                options={sexOptions}
            />
        </div>
    );
});
