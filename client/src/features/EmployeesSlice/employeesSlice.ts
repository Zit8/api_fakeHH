import { createSlice } from '@reduxjs/toolkit';
import type { ResumeType } from '../../types';

type StateType = {
  empls: ResumeType[];
  budget: number;
};

const initialState: StateType = {
  empls: [],
  budget: 500000,
};

const emplSlice = createSlice({
  name: 'empls',
  initialState,
  reducers: {
    addEmployee(state, action) {
      const { salary } = action.payload;
      state.budget -= salary;
      state.empls.push(action.payload);
      console.log(state.budget);
    },
    deleteEmployee(state, action) {
      console.log(action, '<<<<<<<<<<<<<<<<<<<<<<<');

      const { id, salary } = action.payload;
      state.budget += salary;
      state.empls = state.empls.filter((el) => el.id !== id);
    },
  },
});

export const { addEmployee, deleteEmployee } = emplSlice.actions;
export default emplSlice.reducer;
