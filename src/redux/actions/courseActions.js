import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall } from './apiStatusActions';

export function loadCourseSucess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSucess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSucess(courses) {
  return { type: types.CREATE_COURSE_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSucess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSucess(savedCourse))
          : dispatch(createCourseSucess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
}
