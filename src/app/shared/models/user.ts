import { Address } from "./address.model"

export interface User {
    id: number,
    firstName: string,
    lastName: string
    profileImage: string,
    email: string,
    password: number,
    phoneNumber: number
    address: Address[]
}