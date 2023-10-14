
export type ILoginUser = {
    email: string;
    password: string;
}

export type ILoginResponse = {
    token: string;
}

export type IRefreshTokenResponse = {
    accessToken: string;
}