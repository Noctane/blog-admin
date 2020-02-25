export function login(credentials) {
  return new Promise((resolve, reject) => {
    if (credentials.login === 'overblog' && credentials.password === 'overblog') {
      resolve(localStorage.setItem('token', Date.now()));
    } else {
      reject('wrong creds');
    }
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    resolve(localStorage.clear())
  });
}