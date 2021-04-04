import { createDirectiveDefinitionMap } from '@angular/compiler/src/render3/partial/directive';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-component-card',
  templateUrl: './add-component-card.component.html',
  styleUrls: ['./add-component-card.component.scss'],
})
export class AddComponentCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    function Card(num, color) {
      this.num = num;
      this.color = color;
      this.init();
    }

    Card.prototype = {
      constructor: Card,
      init: function () {
        const mainElem = document.createElement('div');
        mainElem.style.color = this.color;

        mainElem.style.display = 'inline-flex';
        mainElem.style.width = '100px';
        mainElem.style.height = '150px';
        mainElem.style.border = '2px solid black';
        mainElem.style.borderRadius = '10px';
        mainElem.style.fontSize = '3rem';
        mainElem.style.fontWeight = '900';
        mainElem.style.justifyContent = 'center';
        mainElem.style.alignItems = 'center';

        mainElem.innerHTML = this.num;

        mainElem.classList.add('card');
        document.body.appendChild(mainElem);
      },
    };

    const card1 = new Card(1, 'green');
    const card2 = new Card(2, 'blue');
  }
}
