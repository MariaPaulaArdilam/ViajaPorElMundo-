import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './pages/one/one.component';
import { NextButtonComponent } from './components/next-button/next-button.component';

const routes: Routes = [

  { path: 'one', component: OneComponent },
  {path: 'next-button', component: NextButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
