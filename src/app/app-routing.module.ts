import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FilemanagerComponent } from './components/filemanager/filemanager.component';
import { RxjsPracticeComponent } from './components/rxjs-practice/rxjs-practice.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'datepicker',
    component: DatepickerComponent
  },
  {
    path: 'rxjs-practice',
    component: RxjsPracticeComponent
  },
  {
    path: 'filemanager',
    component: FilemanagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
