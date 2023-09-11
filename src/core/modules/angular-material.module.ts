import { NgModule } from '@angular/core';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */

const modules = [
  ClipboardModule,
  MatSelectModule,
  MatCardModule,
  MatRadioModule,
  MatMenuModule,
  MatRadioModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatTreeModule,
  MatTabsModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSortModule,
  MatStepperModule,
  MatSlideToggleModule,
  DragDropModule,
  MatRadioModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSliderModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
  MatGridListModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {}