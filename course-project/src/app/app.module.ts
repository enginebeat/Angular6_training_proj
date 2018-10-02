import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppShoppingListComponent } from './shoppingList/app-shopping-list/app-shopping-list.component';
import { AppShoppingListEditComponent } from './shoppingList/app-shopping-list-edit/app-shopping-list-edit.component';
import { AppRecipeListComponent } from './recipeBook/app-recipe-list/app-recipe-list.component';
import { AppRecipeItemComponent } from './recipeBook/app-recipe-item/app-recipe-item.component';
import { AppRecipeDetailComponent } from './recipeBook/app-recipe-detail/app-recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppShoppingListComponent,
    AppShoppingListEditComponent,
    AppRecipeListComponent,
    AppRecipeItemComponent,
    AppRecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
