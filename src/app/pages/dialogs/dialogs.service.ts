import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AbstractService } from 'src/core/common/service/AbstractService';
import * as Papa from 'papaparse';

/**
\ * @author GAUSS
 * @since 1.0.0
 *
 */
@Injectable()
export class DialogsService extends AbstractService {
  constructor(private  httpClient:  HttpClient) {
    super();
  }
  public getCsvData(): Observable<any[]> {
    return this.httpClient.get('/assets/temp.csv', { responseType: 'text' }).pipe(
      map((csvData: string) => this.parseCsvData(csvData))
    );
  }

  public parseCsvData(csvData: string): any[] {
    const parsedData = Papa.parse(csvData, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    });

    return parsedData.data;
  }
}