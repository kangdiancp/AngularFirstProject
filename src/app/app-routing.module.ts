import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PemiluComponent } from './components/pemilu2024/pemilu.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category.component';

const routes: Routes = [
  {path:'',component:HelloWorldComponent},
  {path:'basic',component: UserListComponent},
  {path:'pemilu',component: PemiluComponent},
  {path:'category',component: CategoryComponent},
  {path: 'category/add', component: AddCategoryComponent },
  {path: 'category/update/:id', component: EditCategoryComponent },
  {path: '**',component:HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
