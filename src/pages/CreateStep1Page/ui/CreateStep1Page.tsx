import UserPage from 'entities/User/ui/UserPage/UserPage';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

const CreateStep1Page = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h2 className="visually-hidden">Step 1</h2>
            <UserPage />

            <div className={classNames('btn-wrapper', {}, [])}>
                <Button
                    className="btn-margin"
                    type="submit"
                    name="back"
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Назад
                </Button>
                <Button
                    className="btn-margin"
                    type="submit"
                    name="next"
                    theme={ThemeButton.COLOR}
                    onClick={() => {
                        navigate('/step2');
                    }}
                >
                    Далее
                </Button>
            </div>
        </div>
    );
};

export default CreateStep1Page;
