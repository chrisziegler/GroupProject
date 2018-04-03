import { SIGNED_IN, ADD_GOAL } from '../actions';

let user = {
  email: null
};

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      const { email } = action;
      user = { email };
      return user;
    case ADD_GOAL:
      const { title } = action;
      return { title };
    default:
      return state;
  }
};
