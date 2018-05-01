import { DisplayModel } from './../models/display.model';
import { AspectRatioEnum } from './aspect-ratio.enum';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertiseService {
  private url = environment.advertiseAPI;

  constructor(private _http: HttpClient) {
  }

  getAdvertises(ratio: AspectRatioEnum) {
    const param = ratio ? ratio.valueOf() : '';
    const url = this.url + '?sizeId=' + param;
    return this._http.get(url, { headers: this.createHeaders() });
  }

  createHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('access-control-allow-origin', '');
    headers.append('Content-Type', 'application/json');

    return headers;
  }
}
