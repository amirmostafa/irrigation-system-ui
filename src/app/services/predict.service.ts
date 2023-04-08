import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plot } from '../models/plot.model';

@Injectable({
  providedIn: 'root'
})
export class PredictService {
  url = 'predict';
  constructor(private http: HttpClient) { }

  predict(id) {
    return this.http.get<Plot>(`${this.url}/${id}`);
  }

}
