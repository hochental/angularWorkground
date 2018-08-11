export class User {
    id: number;
    username: string;
    password: string;
    userRights: UserRights;
}
export class UserRights{
    id: number;
    name: string;
}