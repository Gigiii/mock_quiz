export interface User {
    id: number;
    username: string;
    email: string;
    registrationTime: Date;
    lastLogin: Date;
    status: 'Confirmed' | 'Blocked';
}