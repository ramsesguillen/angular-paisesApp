import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';

  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClassCss(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) return;

    this.regionActiva = region;
    this.paises = [];
    this.hayError = false;

    this.paisService.buscarRegion(this.regionActiva)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.paises = [];
        this.hayError = true;
      })
  }

}
