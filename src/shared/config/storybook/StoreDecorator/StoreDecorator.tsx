import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

// import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

// const defaultAsyncReducers: ReducersList = {};

// export const StoreDecorator = (
//     state: DeepPartial<StateSchema>,
//     asyncReducers?: ReducersList,
// ) => (StoryComponent: Story) => (
//     <StoreProvider>
//         <StoryComponent />
//     </StoreProvider>
// );
export const StoreDecorator = () => (StoryComponent: Story) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
