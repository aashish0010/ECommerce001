import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Breadcrumb } from '../../../shared/components/widgets/breadcrumb/breadcrumb';

@Component({
    selector: 'app-parcel-service',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule, Breadcrumb],
    templateUrl: './parcel-service.component.html',
    styleUrls: ['./parcel-service.component.scss']
})
export class ParcelServiceComponent {
    public breadcrumb = {
        title: 'International Parcel Service',
        items: [{ label: 'Home', url: '/' }, { label: 'Parcel Service', active: true }]
    };
}
