import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ResumeType } from '../../types';

type InitSlice = {
  resumes: ResumeType[];
  budget: number;
};

const initialState: InitSlice = {
  resumes: [],
  budget: 500000,
};

export const getResumesThunk = createAsyncThunk(
  'resumes/allcandidates',
  async () =>
    axios<ResumeType[]>(`http://easyapi.mooo.com/resumes`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
);

const resumesSlice = createSlice({
  name: 'resumesSlice',
  initialState,
  reducers: {
    filterResume(state, action) {
      console.log(action.payload);
      state.resumes = state.resumes.filter(
        (cand) =>
          cand.technologies.some((tech) => tech.includes(action.payload)),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        // cand.technologies.map((el) => el.includes(action.payload)),
        // cand.fullName.includes(action.payload),
        // cand.technologies.forEach((el) => {
        //   console.log(el);
        // cand.includes(action.payload)
        // }),
        // cand.technologies.includes(action.payload),
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getResumesThunk.fulfilled, (state, action) => {
      state.resumes = action.payload;
      console.log(state.resumes);
    });
  },
});
export const { filterResume } = resumesSlice.actions;
export default resumesSlice.reducer;
