import { createSelector } from '@reduxjs/toolkit';
import { getUser } from './getUser';
import { UserSchema } from '../types/userShema';

export const getUserValue = createSelector(getUser, (user: UserSchema) => user);
