export default function (state, action) {
  //compute and return the new state
  if (state === undefined) {
    return null;
  }

  //handle actions
  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
}
