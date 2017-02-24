import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import *  as io from 'socket.io-client'


@Injectable()
export class BoxOfficeService {
    private url: string = 'ws://localhost:5000/boxoffice'
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
    get_boxoffice(api:string) {
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
    query_realtime_boxoffice() {
        this.socket.emit('cn_box_office_realtime', { 'query': "ok" })
    }
    query_day_boxoffice(query="ok") {
        this.socket.emit('cn_box_office_day', { 'query': query })
    }
    query_month_boxoffice(query="ok") {
        this.socket.emit('cn_box_office_month', { 'query': query })
    }
    query_day_cinema(query="ok") {
        this.socket.emit('cn_day_cinema', { 'query': query })
    }
}
