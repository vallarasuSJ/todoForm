import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './components/guide/guide.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';

const routes: Routes = [
  { path: '', component: GuideComponent },
  { path: 'details', component: DetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
