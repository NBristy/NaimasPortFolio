import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from 'src/core/common/service/AbstractService';

/**
\ * @author GAUSS
 * @since 1.0.0
 *
 */
@Injectable()
export class VideoService extends AbstractService {
  constructor(private  httpClient:  HttpClient) {
    super();
  }
  public getVideoData() {
    return this.httpClient.get('/testData.json');
  }
}