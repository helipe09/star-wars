import { Component } from "@angular/core";

@Component({
    selector: 'list-ap-card',
    templateUrl:'list-card.component.html'
})

export class ListCardComponent {
    card = [
        {
          "name": "Luis",
          "specie": "humano"
        },
    
        {
          "name": "Luis",
          "specie": "humano"
        },
      ]
}