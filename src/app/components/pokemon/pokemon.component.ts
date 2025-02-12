import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FiltersComponent } from '../../filters/filters.component'
import { PokemonsObjectService } from '../../services/pokemons-object.service'
import { Pokemon } from '../../services/pokemon'
import { POKEMONS } from '../../services/mock-pokemons'
import { FormsModule } from '@angular/forms'
import { SearchPipe } from '../../common/pipes/search.pipe'


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FiltersComponent, FormsModule, SearchPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{
  pokemons: Pokemon[] = [];
  pokemon: Pokemon = {
    id: 1,
    name: 'pikachu',
    order: 1,
    image: 'pikachu.png',
    type: 'electrico'
  }
  title = "Información de los Pokemons"
  searchValue: string = "";
  constructor(private pokemonsObjectService: PokemonsObjectService) {  }
  ngOnInit(){
    this.pokemonsObjectService.array$.subscribe(pokemons => this.pokemons = pokemons)
    this.pokemonsObjectService.setArray(POKEMONS);
  }
}
