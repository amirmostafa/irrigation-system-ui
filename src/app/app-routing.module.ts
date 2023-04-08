import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlotComponent } from './components/add-plot/add-plot.component';
import { ConfigurePlotComponent } from './components/configure-plot/configure-plot.component';
import { EditPlotComponent } from './components/edit-plot/edit-plot.component';
import { PlotDetailsComponent } from './components/plot-details/plot-details.component';
import { PlotsComponent } from './components/plots/plots.component';

const routes: Routes = [
  { path: 'plots', component: PlotsComponent },
  { path: 'plots/:id', component: PlotDetailsComponent },
  { path: 'add-plot', component: AddPlotComponent },
  { path: 'edit-plot/:id', component: EditPlotComponent },
  { path: 'configure-plot/:id', component: ConfigurePlotComponent },
  { path: '', redirectTo: '/plots', pathMatch: 'full' },
  { path: '**', redirectTo: '/plots', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
