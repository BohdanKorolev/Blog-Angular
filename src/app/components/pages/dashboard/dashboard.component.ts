import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {AddCategoryModalComponent} from "./add-category-modal/add-category-modal.component";
import {RemoveCategoryModalComponent} from "./remove-category-modal/remove-category-modal.component";
import {BsModalService, ModalOptions} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  categories: Array<any> = new Array<any>();

  constructor(
    private categoryService: CategoryService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(response => {
        this.categories = response;
        this.subscribeCategoriesChange();
      })
  }

  showAddCategoryModal() {
    this.modalService.show(AddCategoryModalComponent);
  }

  removeCategory(category: any) {
    const initialState:ModalOptions = {
      initialState: {
        category: category
      }
    };
    this.modalService.show(RemoveCategoryModalComponent, initialState);
  }

  subscribeCategoriesChange() {
    this.categoryService.onCategoriesChange
      .subscribe((categories: any) => {
        this.categories = categories;
      })
  }
}
