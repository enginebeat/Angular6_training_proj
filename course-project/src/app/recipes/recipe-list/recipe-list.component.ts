import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg'),
    new Recipe('A Test Recipe 2', 'This is another Test', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
