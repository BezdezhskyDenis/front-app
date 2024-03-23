import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";
const API_BASE = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users"
refreshTokenHeader();

export function refreshTokenHeader() {
  httpService.setCommonHeader("x-auth-token", getJWT());
}

export async function createUser(user) {
  const url = `${API_BASE}`
  const response = await httpService.post(url, user);
  return response;
}

export async function login(credentials) {
  const url = `${API_BASE}/login`
  const response = await httpService.post(url, credentials);
  localStorage.setItem(TOKEN_KEY, response.data, response);
  refreshTokenHeader();
  return response;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  refreshTokenHeader();
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}
export async function getUserById(id) {
  try {
    const token = getJWT();
    const url = `${API_BASE}/${id}`
    const response = await httpService.get(url,{
    headers: {
      'x-auth-token': token
    }
  });
  return await response.data
  } catch {
    return [];
  }
}

const usersService = {
  createUser,
  login,
  logout,
  getUser,
  getJWT,
  getUserById,
};

export default usersService;
