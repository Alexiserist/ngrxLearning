import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { ChildComponent } from './component/counter/child/child.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'counters'
  },
  {
    path:'counters',
    component: CounterComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
