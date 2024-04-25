import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  valorInput: string = '';

  constructor(private http: HttpClient
   

  ) { }

  ngOnInit(): void {
  }

  guardarPresupuesto(event:any): void {
    
    this.valorInput = event.target.value;

    
    this.http.post<any>('http://localhost:8000/api/guardar-presupuesto', { valor: this.valorInput }).subscribe({
      next: data => {
        console.log(data); 
      },
      error: error => {
        console.error('Error:', error); 
      }
    });
  }

  siguiente(): void {
  
    this.guardarPresupuesto(1); 
  }

  atras(): void {
    
  }

}
