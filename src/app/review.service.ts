
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { ReviewRequest, ReviewResponse } from './models';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  loading = false;
  constructor(private http: HttpClient) {}

  query(req: ReviewRequest): Observable<ReviewResponse> {
    this.loading = true;
    return this.http.post<ReviewResponse>('/api/reviews/query', req)
      .pipe(finalize(() => this.loading = false));
  }
}
