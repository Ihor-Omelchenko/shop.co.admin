import { Button, ButtonDirective } from 'primeng/button';
import { MultiSelect } from 'primeng/multiselect';
import { InputText } from 'primeng/inputtext';
import { PanelMenu } from 'primeng/panelmenu';
import { Paginator } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { Password } from 'primeng/password';
import { Toolbar } from 'primeng/toolbar';
import { Tooltip } from 'primeng/tooltip';
import { Divider } from 'primeng/divider';
import { NgModule } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { Avatar } from 'primeng/avatar';
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
    InputText,
    Password,
    Divider,
    Toolbar,
    Tooltip,
    Button,
    Ripple,
    Avatar,
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
    InputText,
    Password,
    Divider,
    Toolbar,
    Tooltip,
    Button,
    Ripple,
    Avatar,
    Toast,
    Card,
    Tag
  ]
})

export class PrimengModules {

}
