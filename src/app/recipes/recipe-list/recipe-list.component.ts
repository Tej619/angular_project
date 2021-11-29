import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://www.liveroughcreek.com/wp-content/uploads/2019/09/Rough-Creek-Lodge-Grilled-Quail-Recipe-Texas-Hill-Country-Vacation-Homes-for-Sale.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://www.liveroughcreek.com/wp-content/uploads/2019/09/Rough-Creek-Lodge-Grilled-Quail-Recipe-Texas-Hill-Country-Vacation-Homes-for-Sale.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
