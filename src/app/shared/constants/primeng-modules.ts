import { Button, ButtonDirective } from 'primeng/button';
import { MultiSelect } from 'primeng/multiselect';
import { InputText } from 'primeng/inputtext';
import { PanelMenu } from 'primeng/panelmenu';
import { Paginator } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { Toast } from 'primeng/toast';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';

@NgModule({
  imports: [
    ButtonDirective,
    MultiSelect,
    TableModule,
    InputText,
    PanelMenu,
    Paginator,
    Button,
    Toast,
    Card,
    Tag
  ],
  exports: [
    ButtonDirective,
    MultiSelect,
    TableModule,
    InputText,
    PanelMenu,
    Paginator,
    Button,
    Toast,
    Card,
    Tag
  ]
})

export class PrimengModules {

}
