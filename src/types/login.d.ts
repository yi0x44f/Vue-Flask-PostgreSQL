import type { User } from "@/types/user";

export interface LoginRequest extends User{
    password: string;
}

export interface LoginResponse{
    user: User;
    message: string;
}

export interface LogoutRequest{

}

export interface LogoutResponse{
    message: string;
}

export interface RegisterRequest extends User{
    password: string;
}

export interface RegisterResponse{
    user: User;
    message: string;
}

export interface DashboardRequest{

}

export interface DashboardResponse{
    user: User;
    message: string;
}