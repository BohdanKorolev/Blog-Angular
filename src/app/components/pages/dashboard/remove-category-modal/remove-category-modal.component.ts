import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CategoryService} from "../../../../services/category.service";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-remove-category-modal',
  templateUrl: './remove-category-modal.component.html',
  styleUrls: ['./remove-category-modal.component.scss']
})
export class RemoveCategoryModalComponent implements OnInit {

  inputName: FormControl;
  category?: any;

  constructor(
    private categoryService: CategoryService,
    public bsModalRef: BsModalRef
  ) {
    this.inputName = new FormControl();
  }

  ngOnInit(): void {
  }

  confirm(): void {
    this.categoryService.removeCategoryById(this.category['_id'])
      .subscribe(message => {
        this.bsModalRef.hide();
        this.categoryService.notifyCategoriesChange();
      });
  }

  decline(): void {
    this.bsModalRef?.hide();
  }

}
