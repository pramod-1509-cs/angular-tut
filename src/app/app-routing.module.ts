import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookListComponent } from './book-list/book-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FictionComponent } from './fiction/fiction.component';
import { RoutecmpComponent } from './routecmp/routecmp.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }, 
  { path: 'fiction', component: FictionComponent }, 
  { path: 'routecmp', component:  RoutecmpComponent}, 
  { path: 'login', component:  LoginComponent}, 
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
