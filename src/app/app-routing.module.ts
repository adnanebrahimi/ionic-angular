import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './pages/camera/camera.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { FilepickerComponent } from './pages/filepicker/filepicker.component';
import { SidenavLayoutComponent } from './pages/layouts/sidenav-layout/sidenav-layout.component';
import { MainComponent } from './pages/main/main.component';
import { NFCComponent } from './pages/nfc/nfc.component';
import { SqliteComponent } from './pages/sqlite/sqlite.component';

const routes: Routes = [

  {
    path: '',
    component: SidenavLayoutComponent,
    children: [
      {
        component: MainComponent,
        path: 'main',
      },
      {
        component: CameraComponent,
        path: 'camera',
      },
      {
        component: FilepickerComponent,
        path: 'file-picker',
      },
      {
        component: DynamicFormComponent,
        path: 'dynamic-form',
      },
      {
        component: NFCComponent,
        path: 'nfc',
      },
      {
        component: SqliteComponent,
        path: 'sqlite',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
