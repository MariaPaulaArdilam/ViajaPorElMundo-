import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  paises: any[] = [];
  ciudades: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPaises();
    //this.getCiudades(1);
  }
  getPaises(): void {
    this.http.get<any[]>('http://localhost:8000/api/paises').subscribe((data: any[]) => {
  this.paises = data;
});

    };

    getCiudades(paisId: any): void {
      this.http.get<any[]>(`http://localhost:8000/api/paises/${paisId.target.value}/ciudades`).subscribe((data: any[]) => {
        this.ciudades = data;
      });
  }

}
