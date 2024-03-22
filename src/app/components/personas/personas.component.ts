import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { PersonaInterface } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit {
  personasList:PersonaInterface[]=[];
  constructor(private service: PersonasService) { }

  ngOnInit(): void {

    this.getProducts()
  }

  getProducts() {
    this.service.getPersonas().subscribe({
      next: (result) =>{
        this.personasList = result;
      },
      error:(err)=>{
        console.log(err);
      }



    })

  }
}
