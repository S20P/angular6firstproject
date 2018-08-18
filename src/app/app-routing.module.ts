import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { LabComponent } from './lab/lab.component'; 

const routes: Routes = [{
  path: '', redirectTo: 'users', pathMatch: 'full'
},
{
  path: 'users',
  component: UsersComponent
},
{
  path: 'users/:id',
  component: DetailsComponent
},

{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'labs',
  component: LabComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponents = [SidebarComponent,
  PostsComponent,
  UsersComponent,
  DetailsComponent,
  LabComponent
];