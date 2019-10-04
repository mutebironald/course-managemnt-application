import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { toast } from "react-toastify";

export function loadCourseSucess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSucess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSucess(courses) {
  return { type: types.CREATE_COURSE_SUCCESS, courses };
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
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
        dispatch(apiCallError(error));
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
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function(dispatch) {
    //Doing an optimistic delete so not dispatching a begin/end api call
    //actions, or apiCallError action since we are not showing the loading status for this
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id).catch(error => {
      toast.error("Delete failed." + error.message, { autoClose: false });
    });
  };
}
