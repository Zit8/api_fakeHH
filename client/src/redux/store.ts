import { configureStore, combineReducers } from '@reduxjs/toolkit';
import resumesSlice from '../features/ResumeSliceAndThunk/resumesSlice';
import emplSlice from '../features/EmployeesSlice/employeesSlice';

const rootReducer = combineReducers({
  resumes: resumesSlice,
  emplSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
