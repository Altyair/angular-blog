import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: NotFoundPageComponent,
      }
    ]),
  ]
})
export class NotFoundModule { }
