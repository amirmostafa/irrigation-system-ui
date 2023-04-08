import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PlotService } from 'src/app/services/plot.service';

@Component({
  selector: 'app-add-plot',
  templateUrl: './add-plot.component.html',
  styleUrls: ['./add-plot.component.css']
})
export class AddPlotComponent implements OnInit {
  plotForm = new FormGroup({
    name: new FormControl(),
    crop: new FormControl(),
    location: new FormControl(),
    area: new FormControl()
  });

  constructor(private plotService: PlotService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.plotService.createPlot(this.plotForm.value).subscribe(() => {
        this.router.navigate(['/plots']);
    });
  }
}
