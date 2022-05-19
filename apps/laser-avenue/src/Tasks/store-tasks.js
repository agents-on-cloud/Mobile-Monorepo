import { createSlice } from '@reduxjs/toolkit';

export const consumersStore = createSlice({
  name: 'tasks',
  initialState: {
    fixTasks: [],
    fixSearchTasks: [],
    tasks: [],
    token: '',
    user_id: '2457b45c-18fd-4caa-a43e-f9af85771e85',
    user_name: 'user_name 1 ',
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    getTaskas: (state, action) => {
      state.fixTasks = action.payload;
      state.fixSearchTasks = action.payload;
      state.tasks = action.payload;
    },
    getAllTasks: (state, action) => {
      state.tasks = state.fixTasks;
      state.fixSearchTasks = state.fixTasks;
      state.fixTasks = state.fixTasks;
    },
    getTodayTasks: (state, action) => {
      let todayDate = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10);
      const arr = state.fixTasks.filter((element) => {
        return element.due_date === todayDate;
      });
      state.tasks = arr;
      state.fixSearchTasks = arr;
    },
    getTomorrowTasks: (state, action) => {
      const todayDate = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10);
      let dateOffset = 24 * 60 * 60 * 1000 * 1;
      let myDate = new Date(todayDate);
      let tomorrow = new Date(myDate.setTime(myDate.getTime() + dateOffset))
        .toISOString()
        .substr(0, 10);
      const arr = state.fixTasks.filter((element) => {
        return element.due_date === tomorrow;
      });
      state.tasks = arr;
      state.fixSearchTasks = arr;
    },
    getThisWeek: (state, action) => {
      const todayDate = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10);
      let dateOffset = 24 * 60 * 60 * 1000 * 7;
      let myDate = new Date(todayDate);
      let thisWeak = new Date(myDate.setTime(myDate.getTime() + dateOffset))
        .toISOString()
        .substr(0, 10);
      const filterThisWeek = state.fixTasks.filter((element) => {
        return todayDate <= element.due_date && thisWeak >= element.due_date;
      });
      state.tasks = filterThisWeek;
      state.fixSearchTasks = filterThisWeek;
    },
    getLastWeek: (state, action) => {
      const todayDate = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10);
      let dateOffset = 24 * 60 * 60 * 1000 * 7;
      let myDate = new Date(todayDate);
      let lastWeak = new Date(myDate.setTime(myDate.getTime() - dateOffset))
        .toISOString()
        .substr(0, 10);
      const filterLastWeek = state.fixTasks.filter((element) => {
        return element.due_date >= lastWeak && element.due_date < todayDate;
      });
      state.tasks = filterLastWeek;
      state.fixSearchTasks = filterLastWeek;
    },
    setDeleteTask: (state, action) => {
      const afterDelete = state.tasks.filter((ele) => {
        return ele.task_id !== action.payload;
      });
      state.tasks = afterDelete;
      state.fixSearchTasks = state.fixSearchTasks;
      state.fixTasks = state.fixTasks;
    },
  },
});

export const {
  increment,
  getTaskas,
  getAllTasks,
  getTodayTasks,
  getTomorrowTasks,
  getThisWeek,
  getLastWeek,
  setDeleteTask,
} = consumersStore.actions;
export default consumersStore.reducer;
