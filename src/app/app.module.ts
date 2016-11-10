import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* --- App Main Component --- */
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

/* --- Routes --- */
import { routes } from './app.routes';

/* --- App Modules --- */
import { AppUtilsModule } from './app-utils/app-utils.module';
import { ContactsModule } from './contacts/contacts.module';
import { GalleryModule } from './gallery/gallery.module';
import { NewsModule } from './news/news.module';
import { UsefulMaterialsModule } from './useful-materials/useful-materials.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    AppUtilsModule,
    ContactsModule,
    GalleryModule,
    NewsModule,
    UsefulMaterialsModule,
    ProfileModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
