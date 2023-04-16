import type store from '../redux/store';

// export type BudgetType = {
//   value: number;
// };
export type ResumeType = {
  id: number;
  img: string;
  fullName: string;
  birthDate: Date;
  about: string;
  technologies: string[];
  achievments: string[];
  education: string;
  prefered: string;
  phone: string;
  telegram: string;
  git: string;
  email: string;
  salary: number;
  createdAt: Date;
  updatedAt: Date;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
