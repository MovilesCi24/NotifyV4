import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PopComponent } from './pop/pop.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'notify-detail', loadChildren: './notify-detail/notify-detail.module#NotifyDetailPageModule' },
  { path: 'perfiles', loadChildren: './perfiles/perfiles.module#PerfilesPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosPageModule' },
  { path: 'ajustes-v', loadChildren: './ajustes-v/ajustes-v.module#AjustesVPageModule' },
  { path: 'new-perfil', loadChildren: './new-perfil/new-perfil.module#NewPerfilPageModule' },
  { path: 'perfil-events/:Id', loadChildren: './perfil-events/perfil-events.module#PerfilEventsPageModule' },
  { path: 'vperfil-event/:Id', loadChildren: './vperfil-event/vperfil-event.module#VperfilEventPageModule' },
  { path: 'user-perfil/:Id', loadChildren: './user-perfil/user-perfil.module#UserPerfilPageModule' },
  { path: 'asociate-events/:Id', loadChildren: './asociate-events/asociate-events.module#AsociateEventsPageModule' },
  { path: 'prueba', loadChildren: './prueba/prueba.module#PruebaPageModule' },
  { path: 'alerta', loadChildren: './alerta/alerta.module#AlertaPageModule' },
  { path: 'ver-noty/:Id', loadChildren: './ver-noty/ver-noty.module#VerNotyPageModule' },
  { path: 'archived', loadChildren: './archived/archived.module#ArchivedPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
