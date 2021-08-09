import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'create', component: ItemCreateComponent},
  {path: 'list/:id', component: ItemEditComponent},
  {path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
