import { FETCH_LIST_USER_SECCESS } from "../action/userAction";

const inialState = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    role: "",
  },
  isAuthenticated: false,
};

const userReducer = (state = inialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_LIST_USER_SECCESS:
      console.log(action);
      return {
        ...state,
        account: {
          access_token: action.payload.DT.access_token,
          refresh_token: action.payload.DT.refresh_token,
          username: action.payload.DT.username,
          image: action.payload.DT.image,
          role: action.payload.DT.role,
        },
        isAuthenticated: true,
      };
  }
  return { ...state };
};

export default userReducer;
