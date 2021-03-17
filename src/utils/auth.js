import { save, load, clear } from './local-storage'

export function login(token) {
  save('Bearer', token);
  document.location.href = "";
}

export function logout() {
  clear('Bearer');
  document.location.href = "";
}

export function isLogged() {
  return !!load('Bearer');
}
