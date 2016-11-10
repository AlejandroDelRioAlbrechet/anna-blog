import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';

/* --- Components --- */
import { NewsComponent } from './news.component';

/* --- Services --- */
import { NewsService } from './news.service';

/* --- Resolvers --- */
import { NewsResolver } from './news.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [NewsService, NewsResolver],
  declarations: [NewsComponent]
})
export class NewsModule { }
