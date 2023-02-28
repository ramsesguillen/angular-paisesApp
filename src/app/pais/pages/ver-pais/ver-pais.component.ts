import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe( (pais: Country[]) => this.pais = pais[0])

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe( (pais) => {
    //         console.log(pais)
    //       });
    //   })
  }


}
