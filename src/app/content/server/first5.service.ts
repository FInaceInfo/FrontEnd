import { Injectable } from '@angular/core';
import { Headers, Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { io } from 'socket.io-client';

@Injectable()
export class IndexWsService {

  private IndexWsUrl = 'ws://';  // URL to web api
  constructor(private http: Http) { }
  getIndex(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data.map((data)=>new Hero(data.id,data.name,data.power,data.state)) as Hero[])
      .catch(this.handleError);
  }
}
