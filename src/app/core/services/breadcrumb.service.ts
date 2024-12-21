import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<Breadcrumb[]>([])
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(()=> {
      const root = this.router.routerState.snapshot.root;
      const breadcrumb = this.getBreadcrumbs(root);
      this.breadcrumbSubject.next(breadcrumb)
    })
   }
   
   // Generate breadcrumbs for the route
  getBreadcrumbs(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const label = route.data['breadcrumb']; // Get breadcrumb from route data
    const path = route.routeConfig && route.routeConfig.path ? route.routeConfig.path : '';

    const nextUrl = `${url}/${path}`;
    const breadcrumb = {
      label: label,
      url: nextUrl,
    };

    const newBreadcrumbs = [...breadcrumbs, breadcrumb];

    if (route.firstChild) {
      return this.getBreadcrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
