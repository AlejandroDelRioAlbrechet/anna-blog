import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';

import { GalleryService } from './gallery.service';
import { GalleryResolver } from './gallery.resolver';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [GalleryService, GalleryResolver],
  declarations: [GalleryComponent, DetailsComponent]
})
export class GalleryModule { }
