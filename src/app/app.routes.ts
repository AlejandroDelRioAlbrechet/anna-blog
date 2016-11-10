import { Routes } from '@angular/router';

/* --- Routes Components --- */
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './gallery/details/details.component';
import { UsefulMaterialsComponent } from './useful-materials/useful-materials.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';

/* --- Resolvers --- */
import { NewsResolver } from './news/news.resolver';
import { GalleryResolver } from './gallery/gallery.resolver';

export const routes: Routes = [{
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  }, {
    path: 'news',
    component: NewsComponent,
    resolve: {
      news : NewsResolver
    }
  }, {
    path: 'gallery',
    component: GalleryComponent,
    resolve: {
      galleryPosts : GalleryResolver
    }
  }, {
    path: 'gallery/:date',
    component: DetailsComponent,
    resolve: {
      galleryPosts : GalleryResolver
    }
  }, {
    path: 'materials',
    component: UsefulMaterialsComponent
  }, {
    path: 'contacts',
    component: ContactsComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }
];