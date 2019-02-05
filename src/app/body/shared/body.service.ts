import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  constructor() { }
 

  public ObterNomes(): string[] {
    return ["Jose","Joao"];
  }
}
