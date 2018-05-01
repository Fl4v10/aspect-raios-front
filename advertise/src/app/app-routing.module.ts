import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/aspect-ratio', pathMatch: 'full' },
  { path: '/aspect-ratio', component: AspectRatioComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
