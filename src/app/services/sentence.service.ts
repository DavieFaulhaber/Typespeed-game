import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { textClass } from '../textClass/textClass';
import { textClassArray } from '../textClassArray/textClassArray';

@Injectable({
  providedIn: 'root'
})

export class SentenceService {

  constructor() {
    console.log("sentence service aangeroepen")
   }

  //laad de zinnen uit het bestand in een array en zorg dat deze opgevraagd kan worden via deze functie van deze service
  getTextClass(): Observable<textClass[]> {
    console.log("getTypeHolders aangeroepen")
    return of(textClassArray);
  }

}
