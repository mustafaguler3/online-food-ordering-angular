import { Restaurant } from "./restaurant"

export interface Product {
    id:any
    name:string
    price:number
    rating: number
    description:string
    foodImageUrls: string[]
    restaurant: Restaurant
}