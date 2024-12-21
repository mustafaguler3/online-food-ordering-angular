import { Product } from "./product"

export interface Restaurant {
    id:number
    name:string
    rating:number
    location:string
    distance:number
    deliveryTime:number 
    bestSeller:boolean
    discountDescription:string
    discountPercent:number
    maxDiscountAmount:number
    restaurantIcon:string
    products: Product[]
}
