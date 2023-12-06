// import { ReactNode } from 'react';
// import { Provider } from 'react-redux';
// import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
// import { ReducersMapObject } from '@reduxjs/toolkit';
// import { useNavigate } from 'react-router-dom';
// import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import { createReduxStore } from '../config/store';
//
// interface StoreProviderProps {
//     children: ReactNode;
//     initialState?: DeepPartial<StateSchema>;
//     asyncReducers?: ReducersList
// }
//
// export const StoreProvider = (props: StoreProviderProps) => {
//     const { children, initialState, asyncReducers } = props;
//
//     const navigate = useNavigate();
//
//     const store = createReduxStore(
//         initialState as StateSchema,
//         asyncReducers as ReducersMapObject<StateSchema>,
//         navigate,
//     );
//
//     return (
//         <Provider store={store}>
//             {children}
//         </Provider>
//     );
// };
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
