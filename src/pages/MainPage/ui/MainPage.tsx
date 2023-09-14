import LoginForm from 'entities/User/ui/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h2 className="visually-hidden">main</h2>

            <LoginForm />
            <Button
                className="btn-margin"
                type="submit"
                name="start"
                theme={ThemeButton.COLOR}
                onClick={() => {
                    navigate('/step1');
                }}
            >
                Начать
            </Button>
        </div>
    );
};

export default MainPage;
