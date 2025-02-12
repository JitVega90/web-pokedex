import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../services/pokemon';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: Pokemon[], searchInput: string) {
    searchInput = searchInput ? searchInput.toLocaleLowerCase() : '';

    return searchInput ? value.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(searchInput)) : value;
  }

}
