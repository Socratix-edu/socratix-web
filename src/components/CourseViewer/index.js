import React from 'react';
import {connect} from 'react-redux';
import {Link, Switch, Route} from 'react-router-dom';
import Listing from './Listing';
import Landing from './Landing';
import VideoPlayer from './VideoPlayer';

const CourseLanding = props => {
  console.log('course props', props);
  return (
    <React.Fragment>
      <div className="mb-3">
        <Link to="/courses">
          &lt;&lt; Back to Courses
        </Link>
      </div>
      <div>
        <h1 className="display-2">{props.title}</h1>
        <p>{props.description}</p>
        <div className="container">
          <Switch>
            <Route exact path={`/learn/${props.id}`} render={() => <Landing {...props} />} />
            <Route path={`/learn/${props.id}/video/:videoId`} render={() => <VideoPlayer />} />
          </Switch>
          <div className="row py-3">
            {props.lessons.map(lessonId => (
              <Listing key={lessonId} id={lessonId} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params;
  return {
    id,
    ...state.courses[id],
  };
};

export default connect(mapStateToProps)(CourseLanding);
