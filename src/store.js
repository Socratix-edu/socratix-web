import {createStore} from 'redux';

const defaultState = {
  courses: {
    1: {
      title: 'Sexuality 101',
      description: 'Not sure where to start?  Learn the basics here!',
      lessons: [1, 2, 3]
    },
    2: {
      title: 'How to Break Up',
      description: 'Breaking up is hard, learn how to survive it in one peace',
      lessons: [],
    },
    3: {
      title: 'What is consent?',
      description: 'And how does it play into a healthy relationship',
      lessons: []
    },
  },
  lessons: {
    1: {
      id: 1,
      courseId: 1,
      title: 'One',
      description: 'First'
    },
    2: {
      id: 2,
      courseId: 1,
      title: 'Two',
      description: 'Second'
    },
    3: {
      id: 3,
      courseId: 1,
      title: 'Three',
      description: 'Third'
    }
  }
};

var reducer = function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default createStore(reducer);
