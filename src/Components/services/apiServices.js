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

export { postNewUser };
