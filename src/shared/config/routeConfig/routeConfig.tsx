import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { CreateStep1Page } from 'pages/CreateStep1Page';
import { CreateStep2Page } from 'pages/CreateStep2Page';
import { CreateStep3Page } from 'pages/CreateStep3Page';

export enum AppRoutes {
    MAIN = 'main',
    STEP1 = 'Step1',
    STEP2 = 'Step2',
    STEP3 = 'Step3',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.STEP1]: '/Step1',
    [AppRoutes.STEP2]: '/Step2',
    [AppRoutes.STEP3]: '/Step3',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.STEP1]: {
        path: RoutePath.Step1,
        element: <CreateStep1Page />,
    },
    [AppRoutes.STEP2]: {
        path: RoutePath.Step2,
        element: <CreateStep2Page />,
    },
    [AppRoutes.STEP3]: {
        path: RoutePath.Step3,
        element: <CreateStep3Page />,
    },
};
