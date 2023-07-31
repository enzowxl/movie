export interface UserSignUpProps {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UserSignInProps {
    email: string;
    password: string;
}

export interface InputSignUpProps {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    updateUsername: any;
    updateEmail: any;
    updatePassword: any;
    updateConfirmPassword: any;
}

export interface InputSignInProps {
    email: string;
    password: string;
    updateEmail: any;
    updatePassword: any;
}