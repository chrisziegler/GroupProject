import { SIGNED_IN } from '../actions';

let user = {
  email: null,
  uid: ''
};

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      const { email, uid } = action;
      user = {
        uid,
        email
      };
      return user;
    default:
      return state;
  }
};
