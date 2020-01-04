import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Component
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'Home', component : HomeComponent },
  { path : 'Login', component : LoginComponent },
  { path : 'Register', component : RegisterComponent},
  { path : '', redirectTo : '/Home', pathMatch: 'full' },
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
