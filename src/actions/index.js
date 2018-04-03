export const SIGNED_IN = 'signed_in';
export const ADD_GOAL = 'add_goal';

export function logUser(email) {
  //eslint-disable-next-line
  const action = {
    type: SIGNED_IN,
    email
  };
  return action;
}

export function addGoal(title) {
  const action = {
    type: ADD_GOAL,
    title
  };
  return action;
}
