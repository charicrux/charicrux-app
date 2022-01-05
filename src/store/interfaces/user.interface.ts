import { EAccountStatus } from "../enums/account-status.enum";

export interface IUser {
    _id: string,
    email: string; 
    roles: string[];
    pass?: string; 
    firstName?: string;
    lastName?: string; 
    avatar?:string;
    organizationId?: string,
    status?: EAccountStatus,
    emailVerified?: boolean,
}