//помещает токен в локальное хранилище
export function setAuthHeader(token: string | null | undefined) {
    localStorage.setItem('token', token ? token : '');
}
