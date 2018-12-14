
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';

import { GetJsonService } from './services/get-json.service';
 
const appRoutes: Routes = [
 { path: '', component: AppComponent, pathMatch: 'full'  }
 ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
