import { Component, inject, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationExtras, Router } from "@angular/router";

@Component({
    selector: 'app-subscriber-card',
    templateUrl: './subscriber-card.component.html',
    styleUrl: './subscriber-card.component.scss',
    imports: [CommonModule],
    standalone: true,
})
export class SubscriberCardComponent {
    @Input() id?: number;
    @Input() username?: string;
    @Input() age?: string;
    @Input() gender?: string;
    @Input() email?: string = 'https://dummyjson.com/users/1';
    @Input() image?: string;
    @Input() userAgent?: string;

    #router = inject(Router);

    goToDetail() {
        this.#router.navigate([`/details/${this.id}/${this.username?.toLocaleLowerCase()}`]);
    }
}

