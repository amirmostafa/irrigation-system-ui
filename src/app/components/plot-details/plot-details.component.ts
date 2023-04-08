import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plot } from 'src/app/models/plot.model';
import { PlotService } from 'src/app/services/plot.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-plot-details',
  templateUrl: './plot-details.component.html',
  styleUrls: ['./plot-details.component.css']
})
export class PlotDetailsComponent implements OnInit {
  id;
  plot: Plot;
  displayedColumns:string[] =  ['id', 'startTime', 'endTime', 'every', 'amountOfWater', 'actions']

  constructor(private plotService: PlotService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.plotService.getPlotDetails(this.id).subscribe(data => {
      this.plot = data;
    });
  }

}
