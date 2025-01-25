import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./app.component').then(m => m.AppComponent)
    },
    {
        path: 'library',
        loadComponent: () =>
            import('./library/library.component').then(m => m.LibraryComponent)
    },
    {
        path: 'lab',
        loadComponent: () =>
            import('./lab/lab.component').then(m => m.LabComponent)
    }
];
