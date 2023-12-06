import { StateSchema } from 'app/providers/StoreProvider';

export const getStepFormUser = (state: StateSchema) => state.user.stepForm;
