export function login(credentials) {
  return new Promise((resolve, reject) => {
    if (credentials.login === 'overblog' && credentials.password === 'overblog') {
      resolve('connecté')
    } else {
      reject('wrong creds')
    }
  });
}