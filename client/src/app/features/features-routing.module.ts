import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "../core/page-not-found/page-not-found.component";

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full'
    },
    {
      path: 'teams',
      loadChildren: async () =>
        import('./team/team.module').then((m) => m.TeamModule),
    },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
