export const SIGNED_IN = 'signed_in';
export const SET_GOALS = 'set-goals';

export function logUser(email, uid) {
  const action = {
    type: SIGNED_IN,
    email,
    uid
  };
  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  };
  return action;
}
