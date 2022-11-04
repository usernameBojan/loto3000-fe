import { setAuthToken } from "./token-service";

const authHeader = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  if(token) return setAuthToken(token);
}

export default authHeader;