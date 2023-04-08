import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plot } from '../models/plot.model';

@Injectable({
  providedIn: 'root'
})
export class PlotService {
  url = 'plots';
  constructor(private http: HttpClient) { }

  getAllPlots() {
    return this.http.get<Plot[]>(this.url);
  }

  getPlotDetails(id) {
    return this.http.get<Plot>(`${this.url}/${id}`);
  }

  createPlot(plot) {
    return this.http.post<Plot>(this.url, plot);
  }

  updatePlot(id, plot) {
    return this.http.put<Plot>(`${this.url}/${id}`, plot);
  }

  deletePlot(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  configurePlot(id, plotConfig) {
    return this.http.patch<Plot>(`${this.url}/${id}`, plotConfig);
  }

  removePlotConfig(id) {
    return this.http.post(`${this.url}/removePlotConfig/${id}`, {});
  }
}
