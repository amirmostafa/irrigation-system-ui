import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlotService } from 'src/app/services/plot.service';

@Component({
  selector: 'app-edit-plot',
  templateUrl: './edit-plot.component.html',
  styleUrls: ['./edit-plot.component.css']
})
export class EditPlotComponent implements OnInit {
  id;
  plotForm = new FormGroup({
    name: new FormControl(),
    crop: new FormControl(),
    location: new FormControl(),
    area: new FormControl()
  });

  constructor(private plotService: PlotService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.id = this.activeRoute.snapshot.paramMap.get('id');
      this.plotService.getPlotDetails(this.id).subscribe(data => {
        this.plotForm.patchValue(data);
      });
    }

  save() {
    this.plotService.updatePlot(this.id, this.plotForm.value).subscribe(() => {
        this.router.navigate(['/plots']);
    });
  }
}
