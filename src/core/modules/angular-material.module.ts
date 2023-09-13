import { NgModule } from '@angular/core';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
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
  MatGridListModule,
  MatDividerModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {}