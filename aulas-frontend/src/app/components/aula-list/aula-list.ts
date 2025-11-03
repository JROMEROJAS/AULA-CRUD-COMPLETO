import { Component, OnInit } from '@angular/core';
import { Aula } from '../../models/aula';
import { AulaService } from '../../service/aula-service';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aula-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './aula-list.html',
  styleUrl: './aula-list.css',
})
export class AulaList implements OnInit {
  aulas: Aula[] = [];
  filteredAulas: Aula[] = [];
  filterTipo: string = '';
  filterEstado: string = '';

  constructor(private aulaService: AulaService, private router: Router) {}

  ngOnInit(): void {
    this.loadAulas();
  }

  loadAulas(): void {
    this.aulaService.getAulas().subscribe({
      next: (data) => {
        this.aulas = data;
        this.filteredAulas = data;
        this.applyFilters();
      },
      error: (e) => console.error(e)
    });
  }

  deleteAula(id: number) : void {
    if(confirm('Esta seguro de que desea eliminar esta aula?')) {
      this.aulaService.deleteAula(id).subscribe({
        next: () => {
          this.aulas = this.aulas.filter(aula => aula.id !== id);
          this.applyFilters(); 
          alert('Aula eliminada con exito.');
        },
        error: (e) => {
          console.error(e);
          alert('Error al intentar eliminar el aula.')
        }
      });
    }
  }

  applyFilters(): void {
    this.filteredAulas = this.aulas.filter(aula => {
      const matchesTipo = !this.filterTipo || aula.tipo == this.filterTipo;
      const matchesEstado = !this.filterEstado || aula.estado == this.filterEstado;
      return matchesTipo && matchesEstado;
    });
  }

  clearFilters(): void {
    this.filterTipo = '';
    this.filterEstado = '';
    this.applyFilters();
  }

  getEstadoBadgeClass(estado: string): string {
    switch (estado) {
      case 'DISPONIBLE':
        return 'badge-disponible';
      case 'MANTENIMIENTO':
        return 'badge-mantenimiento';
      case 'OCUPADA':
        return 'badge-ocupada';
      default:
        return 'bg-secondary';
    }
  }
}
