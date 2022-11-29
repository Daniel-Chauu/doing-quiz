import axios from "../utils/axiosCustomize";

const postNewUser = (email, password, username, role, image, previewImg) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("username", username);
  formData.append("role", role);
  formData.append("userImage", image);
  formData.append("previewImg", previewImg);

  return axios.post("api/v1/participant", formData);
};
const putUpdateUser = (userId, username, role, image) => {
  const formData = new FormData();

  formData.append("id", userId);
  formData.append("username", username);
  formData.append("role", role);
  formData.append("userImage", image);

  return axios.put("api/v1/participant", formData);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
  return axios.post("api/v1/login", { email, password });
};

const registerUser = (email, password, username) => {
  return axios.post("api/v1/register", { email, username, password });
};

export {
  postNewUser,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  registerUser,
};
