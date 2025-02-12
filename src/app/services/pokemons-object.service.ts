import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsObjectService {
  private arraySubject = new BehaviorSubject<Pokemon[]>([]);
  array$ = this.arraySubject.asObservable();
  constructor() { }

  getArray() {
    return this.arraySubject.getValue();
  }

  setArray(newArray: Pokemon[]){
    this.arraySubject.next(newArray);
  }

  orderBy(order: String){
    if(order === "nombre"){
      this.arraySubject.getValue().sort((a,b) => a.name.localeCompare(b.name));
    } else if(order === "clase"){
      this.arraySubject.getValue().sort((a,b) => a.type.localeCompare(b.type));
    }
    return this.arraySubject.getValue();
  }

  addItem(item: Pokemon) {
    const currentArray:Pokemon[] = this.arraySubject.getValue();
    this.arraySubject.next([...currentArray, item]);
  }
}