import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productInterface } from './product.interface';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = 'http://localhost:3000/posts';

  getProducts(): Observable<productInterface[]> {
    return this._http.get<productInterface[]>(this._apiUrl)
  }
}
