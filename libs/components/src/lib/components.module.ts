import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInlineEditComponent } from './table-inline-edit/table-inline-edit.component';

import { MaterialModule } from '@credix/material';
import {  ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { SlideComponent } from './slide/slide.component';
import { MessageComponent } from './message/message.component';
import { PrintErrorComponent } from './print-error/print-error.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [TableInlineEditComponent, SelectComponent, InputComponent, DisplayComponent, SlideComponent, MessageComponent, PrintErrorComponent, DialogComponent],
  exports: [TableInlineEditComponent, SelectComponent, InputComponent, DisplayComponent, SlideComponent, MessageComponent, PrintErrorComponent, DialogComponent],
  entryComponents: [MessageComponent, DialogComponent]
})
export class ComponentsModule {}
