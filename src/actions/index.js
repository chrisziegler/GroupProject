export const SIGNED_IN = 'signed_in';
export const SET_GOALS = 'set_goals';
export const SET_COMPLETED = 'set_completed';
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

export function setCompleted(completeGoals) {
  const action = {
    type: SET_COMPLETED,
    completeGoals
  };
  return action;
}
