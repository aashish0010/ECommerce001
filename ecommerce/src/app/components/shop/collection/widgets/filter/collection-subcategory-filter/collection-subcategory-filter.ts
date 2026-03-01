import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ICategory } from '../../../../../../shared/interface/category.interface';
import { Params } from '../../../../../../shared/interface/core.interface';

@Component({
  selector: 'app-collection-subcategory-filter',
  imports: [FormsModule],
  templateUrl: './collection-subcategory-filter.html',
  styleUrl: './collection-subcategory-filter.scss',
})
export class CollectionSubcategoryFilter {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  @Input() filter: Params;
  @Input() subcategories: ICategory[] = [];

  public selectedSubcategories: string[] = [];

  ngOnChanges() {
    this.selectedSubcategories = this.filter?.['subcategory']
      ? this.filter['subcategory'].split(',')
      : [];
  }

  applyFilter(event: Event) {
    const value = (<HTMLInputElement>event?.target)?.value;
    const index = this.selectedSubcategories.indexOf(value);

    if ((<HTMLInputElement>event?.target)?.checked)
      this.selectedSubcategories.push(value);
    else this.selectedSubcategories.splice(index, 1);

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        subcategory: this.selectedSubcategories.length ? this.selectedSubcategories.join(',') : null,
        page: 1,
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  checked(item: string) {
    return this.selectedSubcategories.indexOf(item) !== -1;
  }
}
