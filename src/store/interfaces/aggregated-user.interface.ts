import { IOrganization } from "../../pages/OrganizationsScreen/interfaces/organization.interface";
import { IUser } from "./user.interface";
import { IWallet } from "./wallet.interface";

export interface IAggregatedUser extends IUser {
    organization: IOrganization,
    wallet: IWallet
}