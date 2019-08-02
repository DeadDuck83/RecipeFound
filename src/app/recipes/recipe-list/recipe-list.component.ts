import { Recipe } from "./../recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "this is simply a test, maybe",
      "https://easybaked.files.wordpress.com/2016/08/emoji-poo-cookies4.jpg"
    ),
    new Recipe(
      "2nd Test Recipe",
      "this is simply another test, maybe",
      "https://www.tasteofhome.com/wp-content/uploads/2018/03/exps173967_HC163708B11_04_5b-696x696.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
