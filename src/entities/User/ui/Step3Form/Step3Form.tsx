import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { UserKeys } from 'entities/User';
import React, { memo } from 'react';
import { Textarea } from 'shared/ui/Textarea/Textarea';
import cls from './Step3Form.module.scss';

interface Step2FormProps {
    labelStep?: string;
    className?: string;
    onPrevStep?:()=>void;
    isValid?:boolean
}

export const Step3Form = memo((props: Step2FormProps) => {
    const {
        className, onPrevStep, isValid, ...otherProps
    } = props;
    const { t } = useTranslation();

    const mods:Mods = {};

    return (
        <div className={classNames('input-wrapper', mods, [className])}>

            <Textarea
                name={UserKeys.about}
                label={t('О себе')}
            />

        </div>
    );
});
