import { IOrganization } from "../../OrganizationsScreen/interfaces/organization.interface";

export interface IFundraiser {
    _id: string,
    name: string,
    goal: number,
    organization: IOrganization
}