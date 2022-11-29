export const FETCH_LIST_USER_SECCESS = "FETCH_LIST_USER_SECCESS";

const doLogin = (data) => {
  return {
    type: FETCH_LIST_USER_SECCESS,
    payload: data,
  };
};

export default doLogin;
