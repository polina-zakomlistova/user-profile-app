import { StateSchema } from 'app/providers/StoreProvider';

export const getFormUser = (state: StateSchema) => state.user.form;
