import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { NgxSmartTableModule } from '../../ngx-smart-table/ngx-smart-table.module';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxSmartTableModule,
    SharedModule,
  ],
})
export class PagesModule {
}
