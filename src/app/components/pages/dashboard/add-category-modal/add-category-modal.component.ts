import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CategoryService} from "../../../../services/category.service";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent implements OnInit {

  inputName: FormControl;

  constructor(
    private categoryService: CategoryService,
    public bsModalRef: BsModalRef
  ) {
    this.inputName = new FormControl();
  }

  ngOnInit(): void {
  }

  add() {
    if (this.inputName.value) {
      this.categoryService.addCategory(this.inputName.value)
        .subscribe(message => {
          this.bsModalRef.hide();
          this.inputName.setValue('');
          this.categoryService.notifyCategoriesChange();
        })
    }
  }

}
