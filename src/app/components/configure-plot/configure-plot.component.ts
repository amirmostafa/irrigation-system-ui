import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IntervalUnit } from 'src/app/models/plot-config.model';
import { PlotService } from 'src/app/services/plot.service';
import { PredictService } from 'src/app/services/predict.service';

@Component({
  selector: 'app-configure-plot',
  templateUrl: './configure-plot.component.html',
  styleUrls: ['./configure-plot.component.css']
})
export class ConfigurePlotComponent implements OnInit {
  id;
  plot;
  plotForm = new FormGroup({
    startTime: new FormControl(),
    endTime: new FormControl(),
    timeInterval: new FormControl(),
    intervalUnit: new FormControl(),
    amountOfWater: new FormControl()
  });
  displayedColumns:string[] =  ['id', 'startTime', 'endTime', 'every', 'amountOfWater', 'actions']
  intervalUnits = Object.keys(IntervalUnit);
  constructor(private plotService: PlotService,
    private activeRoute: ActivatedRoute,
    private predictService: PredictService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.plotService.getPlotDetails(this.id).subscribe(data => {
      this.plot = data;
    });
  }

  addConfig() {
    this.plotService.configurePlot(this.id, this.plotForm.value).subscribe(data => {
      this.plot = data;
    });
  }

  deleteConfig(id) {
    this.plotService.removePlotConfig(id).subscribe(() => {
      this.plotService.getPlotDetails(this.id).subscribe(data => {
        this.plot = data;
      });
    });
  }

  predict() {
    this.predictService.predict(this.id).subscribe(data => {
      this.plot = data;
    })
  }

}
