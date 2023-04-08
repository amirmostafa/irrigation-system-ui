import { Component, OnInit } from '@angular/core';
import { Plot } from 'src/app/models/plot.model';
import { PlotService } from 'src/app/services/plot.service';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {
  displayedColumns:string[] =  ['id', 'name', 'crop', 'area', 'actions']
  dataSource: Plot[] = [];

  constructor(private plotService: PlotService) { }

  ngOnInit(): void {
    this.plotService.getAllPlots().subscribe(data => {
      this.dataSource = data;
    });
  }

  deletePlot(id) {
    this.plotService.deletePlot(id).subscribe(() => {
      this.plotService.getAllPlots().subscribe(data => {
        this.dataSource = data;
      });
    });
  }

}
