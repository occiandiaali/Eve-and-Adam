import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map, Observable, take } from 'rxjs';
import { Subscriber } from '../../services/interfaces';
import { SubscriberService } from '../../services/subscribers.service';
import { SubscriberCardComponent } from '../../components/subscriber-card/subscriber-card.component';

@Component({
    selector: 'app-subscribers',
    templateUrl: 'subscribers.component.html',
    styleUrls: ['subscribers.component.scss'],
    standalone: true,
    imports: [AsyncPipe, SubscriberCardComponent]
})
export class SubscribersComponent implements OnInit {
    #subService = inject(SubscriberService);
    // newFaces$!: Observable<Subscriber>;
    newFaces$!: Observable<any>;
    private data$!: Observable<Subscriber>;

    constructor() {}

    ngOnInit(): void {
        this.getAllNewFaces();
    }

    getAllNewFaces() {
        this.newFaces$ = this.#subService.getAll().pipe(
            map((response: {subscribers: any[]}) => {
                return response.subscribers?.filter((subscriber: any) => subscriber.id <= 15)
            })
        )
    }
}
