import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import cls from './StepForm.module.scss';

export interface StepFormProps {
    className?: string;
    children?: ReactNode;
    label: string;
    onNext?:()=>void;
    onBack?:()=>void;
}

export const StepForm = (props: StepFormProps) => {
    const { className, children, ...otherProps } = props;
    const mods:Mods = {};

    return (
        <div className={classNames(cls.StepForm, mods, [className])}>
            {children}
        </div>
    );
};
