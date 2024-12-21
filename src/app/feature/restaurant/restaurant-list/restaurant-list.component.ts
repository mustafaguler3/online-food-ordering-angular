import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  restaurants: Restaurant[]
  errors: string[]

  constructor(private restaurantService: RestaurantService){}

  ngOnInit(): void {
      this.getRestaurants()
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe({
      next: (response) => {
        this.restaurants = response;
      },
      error: (error) => {
        console.log("Error ", error)
        this.errors = error.message
      }
    })
    
  }

  getProductImage(image:string){
    return this.restaurantService.getProductsImage(image)
  }

}
