import { Component, OnInit } from '@angular/core';
import { ButtonService } from 'src/app/services/button.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  paises: any[] = [];
  ciudades: any[] = [];
  paisSeleccionado:string = "";
  ciudadSeleccionada: string = ""; // Agrega esta línea

  constructor(private http: HttpClient,private buttonService: ButtonService ) { }

  ngOnInit(): void {
    this.getPaises();
  
  }
  getPaises(): void {
    this.http.get<any[]>('http://localhost:8000/api/paises').subscribe((data: any[]) => {
  this.paises = data;
});

    };

    getCiudades(paisId: any): void {
      this.paisSeleccionado = paisId.target.value;
      this.http.get<any[]>(`http://localhost:8000/api/paises/${this.paisSeleccionado}/ciudades`).subscribe((data: any[]) => {
        this.ciudades = data;
      });
  }

  guardarSeleccionViaje(event:any): void {
    this.ciudadSeleccionada = event.target.value;
    
    this.http.post<any>('http://localhost:8000/api/seleccion-viaje', { pais_id: this.paisSeleccionado, ciudad_id: this.ciudadSeleccionada }).subscribe({
      next: data => {
        console.log(data); 
      },
      error: error => {
        console.error('Error:', error); 
      }
    });
  }
  }


