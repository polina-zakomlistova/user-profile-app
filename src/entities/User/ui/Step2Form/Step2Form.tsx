import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FieldArrayCustom } from 'shared/ui/Lists/FieldArrayCustom/FieldArrayCustom';
import { UserKeys } from 'entities/User';
import React, { memo } from 'react';
import { CheckboxList } from 'shared/ui/Lists/CheckboxList/CheckboxList';
import { RadioList } from 'shared/ui/Lists/RadioList/RadioList';
import { ICheckboxListType, IRadioListType } from 'entities/User/model/types/user';
import cls from './Step2Form.module.scss';

interface Step2FormProps {
    labelStep?: string;
    className?: string;
    advantagesList: string[]|undefined;
    levelList: IRadioListType|undefined;
    skillsList: ICheckboxListType|undefined;
    onPrevStep?:()=>void;
    onNextStep?:()=>void;
    isValid?:boolean
}

export const Step2Form = memo((props: Step2FormProps) => {
    const {
        className,
        advantagesList,
        levelList,
        skillsList,
        onPrevStep,
        onNextStep,
        isValid,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    const mods:Mods = {};

    return (
        <div className={classNames('input-wrapper', mods, [className])}>
            {advantagesList
                    && (
                        <FieldArrayCustom
                            name={UserKeys.advantages}
                            label={t('Достоинства')}
                            list={advantagesList}
                        />
                    )}
            { skillsList
                    && (
                        <CheckboxList
                            list={skillsList}
                            label={t('Навыки')}
                            name={UserKeys.checkbox}
                        />
                    )}
            {levelList
                    && (
                        <RadioList
                            name={UserKeys.radio}
                            label={t('Уровень')}
                            list={levelList}
                        />
                    )}
        </div>
    );
});
