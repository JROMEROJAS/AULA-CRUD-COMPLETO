import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aula } from '../../models/aula';
import { AulaService } from '../../service/aula-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aula-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aula-form.html',
  styleUrl: './aula-form.css',
})
export class AulaForm implements OnInit{


  aula: Aula = {
    codigo: '',
    nsillas: 0,
    tipo: 'TEORIA',
    estado: 'DISPONIBLE'
  };

  isEdit: boolean = false;
  submitted: boolean = false;

  tipos = [
    { value: 'TEORIA', label: 'Teoria'},
    { value: 'LABORATORIO', label: 'Laboratorio'},
    { value: 'MIXTA', label: 'Mixta'}
  ];

  estados = [
    { value: 'DISPONIBLE', label: 'Disponible'},
    { value: 'MANTENIMIENTO', label: 'En Mantenimiento'},
    { value: 'OCUPADA', label: 'Ocupada'}
  ];

  constructor(
    private aulaService: AulaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      if (id) {
        this.isEdit = true;
        this.loadAula(+id);
      }
  }

  loadAula(id: number) : void {
    this.aulaService.getAula(id).subscribe({
      next: (data) => {
        this.aula = data;
      },
      error: (e) => {
        console.error(e);
        this.router.navigate(['/aulas']);
      }
    });
  }

  saveAula(): void {
    this.submitted = true;

    if (this.isFormValid()) {
      if (this.isEdit && this.aula.id) {
        this.aulaService.updateAula(this.aula.id, this.aula).subscribe({
          next: () => this.router.navigate(['/aulas']),
          error: (e) => console.error(e)
        });
      } else {
        this.aulaService.createAula(this.aula).subscribe({
          next: () => this.router.navigate(['/aulas']),
          error: (e) => console.error(e)
        });
      }
    }
  }

  isFormValid(): boolean {
    return this.aula.codigo.trim() !== '' &&
    this.aula.nsillas > 0&&
    this.aula.tipo.trim() !== '' &&
    this.aula.estado.trim() !== '';
  }

  cancel(): void {
    this.router.navigate(['/aulas']);
  }
}
