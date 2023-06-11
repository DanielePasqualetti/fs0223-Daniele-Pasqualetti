import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./cartella/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./cartella/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./cartella/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registrati',
    loadChildren: () =>
      import('./cartella/auth/registrati/registrati.module').then(
        (m) => m.RegistratiModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
