import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    
    path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
  },
        {
          path: 'dashboard',
          component: HomeComponent,
          data: {
            header: 'Dashboard'
          }
        },
        {
          path: 'dashboard/:id',
          component: HomeComponent,
          data: {
              header: 'Some Edit info',
          }
      },
          {
            path: 'about',
            component : AboutComponent
          }
      
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
