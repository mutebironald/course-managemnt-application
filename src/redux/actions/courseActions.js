import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";


export function loadCourseSucess(courses) {
  return { type: types.LOAD_COURSES_SUCESS, courses };
}

export function updateCourseSucess(courses) {
  return { type: types.UPDATE_COURSE_SUCESS, courses };
}

export function createCourseSucess(courses) {
  return { type: types.CREATE_COURSE_SUCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
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
