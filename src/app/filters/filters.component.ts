import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PokemonsObjectService } from '../services/pokemons-object.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  title: String = 'Ordenar por:';
  selectItems: String = "nombre";
  options = [
    {id: 1, name:'nombre'},
    {id: 2, name:'clase'}
  ]
  constructor(private pokemonsObjectService: PokemonsObjectService){}
  onItemChange(event: any) {
    this.selectItems = ""
    if(event.name === "nombre"){
      this.pokemonsObjectService.orderBy(event.name)
      console.log('Item seleccionado:', event.name);
    } else if(event.name === "clase"){
      this.pokemonsObjectService.orderBy(event.name)
    }
    // Aquí puedes agregar la lógica que desees
  }
}
