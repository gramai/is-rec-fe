import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) {
  }

  recommendationsBasePath = 'http://localhost:8182/recommendation-system';

  getRecommendations(name: string, type: string, programmingLanguage: string, area: string): Observable<any[]> {
    if (name == null) {
      name = '%';
    }
    if (type == null) {
      type = '%';
    }
    if (programmingLanguage == null) {
      programmingLanguage = '%';
    }
    if (area == null) {
      area = '%';
    }
    const url = this.recommendationsBasePath + '/recommendation'
      + '?name=' + name
      + '&type=' + type
      + '&programmingLanguage=' + programmingLanguage
      + '&area=' + area;
    console.log(url);
    return this.http.get(url, {responseType: 'json'})
      .pipe(
        catchError(this.handleError('spec', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

