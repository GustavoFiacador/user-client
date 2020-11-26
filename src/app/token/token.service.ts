import { Injectable } from '@angular/core';

const KEY = 'authToken';
const REFRESH_TOKEN = 'refreshToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }

    setRefreshToken(refreshToken){
        window.localStorage.setItem(REFRESH_TOKEN, refreshToken);
    }

    getRefreshToken(){
        return window.localStorage.getItem(REFRESH_TOKEN)
    }

    removeRefreshToken() {
        window.localStorage.removeItem(REFRESH_TOKEN);
    }
}