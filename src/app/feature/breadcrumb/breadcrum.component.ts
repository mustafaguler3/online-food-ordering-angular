import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb, BreadcrumbService } from 'src/app/core/services/breadcrumb.service';

@Component({
    selector: 'app-breadcrum',
    templateUrl: './breadcrum.component.html',
    styleUrls: ['./breadcrum.component.css'],
    standalone: false
})
export class BreadcrumComponent {
  breadcrumbs:Breadcrumb[] = [];

  constructor(public breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
