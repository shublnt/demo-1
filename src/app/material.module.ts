import {NgModule} from '@angular/core';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatSelectModule,
  MatInputModule,
  MatChipsModule,
  MatMenuModule,
  MatPaginatorModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}
