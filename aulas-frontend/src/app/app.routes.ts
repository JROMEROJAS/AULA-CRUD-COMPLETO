import { Routes } from '@angular/router';
import { AulaList } from './components/aula-list/aula-list';
import { AulaForm } from './components/aula-form/aula-form';

export const routes: Routes = [
    { path: '', redirectTo: 'aulas', pathMatch: 'full' },
    { path: 'aulas', component: AulaList },
    { path: 'aulas/new', component: AulaForm },
    { path: 'aulas/edit/:id', component: AulaForm }
];