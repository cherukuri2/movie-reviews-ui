
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { ReviewRequest, ReviewResponse } from './models';
import { environment } from '../environments/environment';


@Injectable({ providedIn: 'root' })
export class ReviewService {
  loading = false;
  constructor(private http: HttpClient) {}

  query(body: ReviewRequest): Observable<ReviewResponse> {
    this.loading = true;
    return new Observable<ReviewResponse>(observer => {
      this.http.post<ReviewResponse>(`${environment.apiBase}/api/reviews/query`, body)
        .subscribe({
          next: (res) => { this.loading = false; observer.next(res); observer.complete(); },
          error: (err) => { this.loading = false; observer.error(err); }
        });
    });
  }
}
