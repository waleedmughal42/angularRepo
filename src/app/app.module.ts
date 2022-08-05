import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { RxjsPracticeComponent } from './components/rxjs-practice/rxjs-practice.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilemanagerComponent } from './components/filemanager/filemanager.component';
import { DxButtonModule, DxFileManagerModule, DxPopupModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatepickerComponent,
    RxjsPracticeComponent,
    HeaderComponent,
    FilemanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    DxFileManagerModule,
    DxPopupModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
