import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import *  as io from 'socket.io-client'


@Injectable()
export class NewsService {
    private url: string = 'ws://localhost:5001/finance_news'//'ws://139.199.162.210:5001/finance_news'
    private socket: SocketIOClient.Socket
    constructor() { }
    private connect() {
        console.log(`Connected to "${this.url}"`)
    }
    private disconnect() {
        console.log(`Disconnected from "${this.url}"`)
    }
    private error(error: string) {
        console.log(`ERROR: "${error}" (${this.url})`)
    }
    get_news(api:string) {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on("connect", () => this.connect())
            this.socket.on("disconnect", () => this.disconnect())
            this.socket.on("error", (error: string) => this.error(error))
            this.socket.on(api, (data) => {
                observer.next(data)
            })
            return () => {
                this.socket.disconnect()
            }
        })
        return observable
    }
    query_latest_news() {
        this.socket.emit('latest_news', { 'query': "ok" })
    }
    query_news_keywords() {
        this.socket.emit('news_keywords', { 'query': "ok" })
    }
}
