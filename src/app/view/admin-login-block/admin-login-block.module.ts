import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLoginBlockComponent} from "./blocks/admin-login-block/admin-login-block.component";
import {AdminLoginFormUiComponent} from "./ui/admin-login-form-ui/admin-login-form-ui.component";



@NgModule({
  declarations: [AdminLoginBlockComponent],
  imports: [
    CommonModule,
    AdminLoginFormUiComponent
  ],
  exports: [AdminLoginBlockComponent],
})
export class AdminLoginBlockModule { }
