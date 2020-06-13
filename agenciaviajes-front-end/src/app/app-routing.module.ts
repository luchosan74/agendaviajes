import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule)
  },
  {
    path: 'form-reserva',
    loadChildren: () => import('./form-reserva/form-reserva.module').then( m => m.FormReservaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
