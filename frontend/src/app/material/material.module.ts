import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
const Material= [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatSelectModule

];

@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
