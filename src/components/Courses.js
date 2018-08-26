import React from 'react';
import {connect} from 'react-redux';
import CourseListing from './CourseListing';

class Courses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {courseData} = this.props;

    return (
      <div className="d-flex flex-column">
        <h1 className="display-2">All Courses</h1>
        <p>
          Nunc posuere, urna eget accumsan ultrices, erat risus imperdiet
          ligula, at bibendum est dolor sed nisl. Phasellus ultricies ligula
          arcu, a accumsan tellus efficitur dapibus. Fusce id mattis dui.
          Vestibulum ut massa at justo egestas molestie.
        </p>
        {courseData.map(id => <CourseListing key={id} id={id} />)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  courseData: Object.keys(state.courses),
});

export default connect(mapStateToProps)(Courses);
