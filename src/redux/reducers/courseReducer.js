import * as types from "../actions/actionTypes.js";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCESS:
      return action.courses;
    default:
      return state;
  }
}
