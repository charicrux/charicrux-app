import { IOrganization } from "../../pages/OrganizationsScreen/interfaces/organization.interface";
import { IUser } from "./user.interface";

export interface IAggregatedUser extends IUser {
    organization: IOrganization
}