import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import IconError from 'shared/assets/icons/IconError.svg';
import IconSuccess from 'shared/assets/icons/IconSuccess.svg';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: ()=>void;
    isSucsess: boolean
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className, isOpen, onClose, isSucsess,
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <div className={cls.wrapper}>
                    {isSucsess ? (
                        <>
                            <h3>{t('Форма успешно отправлена')}</h3>
                            <IconSuccess />
                            <Button
                                name="close"
                                onClick={onClose}
                                theme={ButtonTheme.COLOR}
                            >
                                {t('Закрыть')}
                            </Button>
                        </>
                    )
                        : (
                            <>
                                <h3>{t('При отправке произошла ошибка')}</h3>
                                <IconError />
                                <Button
                                    name="close"
                                    onClick={() => navigate(RoutePath.main)}
                                    theme={ButtonTheme.ERROR}
                                >
                                    {t('На главную')}
                                </Button>
                            </>

                        )}

                </div>
            </Suspense>

        </Modal>
    );
};
