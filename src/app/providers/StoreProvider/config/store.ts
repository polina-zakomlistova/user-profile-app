// import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
// import { userReducer } from 'entities/User';
// import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
// import { $api } from 'shared/api/api';
// import { NavigateOptions, To, useNavigate } from 'react-router-dom';
// import { CombinedState, Reducer } from 'redux';
// import { StateSchema, ThunkExtraArgs } from './StateSchema';
//
// export const createReduxStore = (
//     initialState?: StateSchema,
//     asyncReducers?: ReducersMapObject<StateSchema>,
//     navigate?: (to: To, options?: NavigateOptions)=> void,
// ) => {
//     const rootReducers: ReducersMapObject<StateSchema> = {
//         ...asyncReducers,
//         user: userReducer,
//     };
//
//     const reducerManager = createReducerManager(rootReducers);
//
//     const extraArg: ThunkExtraArgs = {
//         api: $api,
//         navigate,
//     };
//
//     const store = configureStore({
//         reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
//         devTools: __IS_DEV__,
//         preloadedState: initialState,
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//             thunk: {
//                 extraArgument: extraArg,
//             },
//         }),
//     });
//
//     // @ts-ignore
//     store.reducerManager = reducerManager;
//
//     return store;
// };
//
// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
