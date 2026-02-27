import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Breadcrumb } from '../../../shared/components/widgets/breadcrumb/breadcrumb';

@Component({
    selector: 'app-flight-booking',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule, Breadcrumb],
    templateUrl: './flight-booking.component.html',
    styleUrls: ['./flight-booking.component.scss']
})
export class FlightBookingComponent {
    public breadcrumb = {
        title: 'Flight Booking',
        items: [{ label: 'Home', url: '/' }, { label: 'Flight Booking', active: true }]
    };
}
