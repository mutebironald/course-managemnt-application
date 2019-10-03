
import React from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursePage extends React.Component {
  componentDidMount() {
      const { courses, authors, loadAuthors, loadCourses } = this.props;
    if (courses.length == 0) {
      loadCourses().catch(error => {
        alert("Load Courses failed" + error);
      });
    }
    if (authors == 0) {
      loadAuthors().catch(error => {
        alert("Loading Authors failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
       </>
    );
  }
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.object.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.authors,
    authors: state.authors
  };
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors, 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
