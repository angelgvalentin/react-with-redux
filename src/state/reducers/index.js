import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    account: accountReducer,
});

export default reducers;

// ? IN THIS CASE SINCE WE ONLY HAVE ONE REDUCER IT'S A LITTLE WERID COMBING BUT WE STILL THE TO DO THE combineReducers STEP

//? IF WE WERE TO HAVE SAY A usersReducer it would look like this:

// !  const reducers = combineReducers({
// !      account: accountReducer,
// !      users: usersReducer
// !  });
