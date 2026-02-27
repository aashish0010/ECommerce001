import { Routes } from '@angular/router';

import { PageResolver } from '../../shared/resolver/page.resolver';

export const page: Routes = [
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us').then(m => m.AboutUs),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us').then(m => m.ContactUs),
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq').then(m => m.Faq),
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search').then(m => m.Search),
  },
  {
    path: 'offers',
    loadComponent: () => import('./offer/offer').then(m => m.Offer),
  },
  {
    path: 'flights',
    loadComponent: () => import('./flight-booking/flight-booking.component').then(m => m.FlightBookingComponent),
  },
  {
    path: 'parcel-service',
    loadComponent: () => import('./parcel-service/parcel-service.component').then(m => m.ParcelServiceComponent),
  },
  {
    path: '404',
    loadComponent: () => import('./error404/error404').then(m => m.Error404),
  },
  {
    path: 'page/:slug',
    loadComponent: () => import('./page/page').then(m => m.Page),
    resolve: {
      data: PageResolver,
    },
  },
];
