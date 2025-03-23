import { Button, ButtonDirective } from 'primeng/button';
import { MultiSelect } from 'primeng/multiselect';
import { InputNumber } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FileUpload } from 'primeng/fileupload';
import { InputText } from 'primeng/inputtext';
import { PanelMenu } from 'primeng/panelmenu';
import { Paginator } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { Password } from 'primeng/password';
import { Textarea } from 'primeng/textarea';
import { Checkbox } from 'primeng/checkbox';
import { Toolbar } from 'primeng/toolbar';
import { Tooltip } from 'primeng/tooltip';
import { Divider } from 'primeng/divider';
import { NgModule } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { Avatar } from 'primeng/avatar';
import { Rating } from 'primeng/rating';
import { Toast } from 'primeng/toast';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';

@NgModule({
  imports: [
    ButtonDirective,
    DropdownModule,
    MultiSelect,
    TableModule,
    InputNumber,
    FileUpload,
    InputText,
    PanelMenu,
    Paginator,
    InputText,
    Password,
    Textarea,
    Checkbox,
    Divider,
    Toolbar,
    Tooltip,
    Button,
    Ripple,
    Rating,
    Avatar,
    Toast,
    Card,
    Tag
  ],
  exports: [
    ButtonDirective,
    DropdownModule,
    MultiSelect,
    TableModule,
    InputNumber,
    FileUpload,
    InputText,
    PanelMenu,
    Paginator,
    InputText,
    Password,
    Textarea,
    Checkbox,
    Divider,
    Toolbar,
    Tooltip,
    Button,
    Ripple,
    Rating,
    Avatar,
    Toast,
    Card,
    Tag
  ]
})

export class PrimengModules {

}
