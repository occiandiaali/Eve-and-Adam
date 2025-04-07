import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

//import { Subscriber } from "./interfaces";

@Injectable({providedIn: 'root'})
export class SubscriberService {
    #http = inject(HttpClient);

    constructor() {}

    getAll(query = ''): Observable<any> {
        return this.#http.get(
            'https://jsonplaceholder.typicode.com/users',
        )
    }

    getSingleSubscriber(id: string): Observable<any> {
        return this.#http.get(
            `https://jsonplaceholder.typicode.com/users?${id}`,
        )
    }
}
