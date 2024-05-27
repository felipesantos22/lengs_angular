import { Injectable } from '@angular/core';
import lenguages from '../data/leng';
import { Leng } from '../interfaces/leng';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private lenguages: Leng[] = lenguages;

  constructor() {}

  getLengs(): Leng[] {
    return this.lenguages;
  }
}
