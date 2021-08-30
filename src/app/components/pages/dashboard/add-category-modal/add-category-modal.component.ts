import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CategoryService} from "../../../../services/category.service";

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent implements OnInit {

  inputName: FormControl;

  @Output() onAdd: EventEmitter<any>;

  constructor(
    private categoryService: CategoryService,
  ) {
    this.inputName = new FormControl();
    this.onAdd = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  add() {
    if (this.inputName.value) {
      this.categoryService.addCategory(this.inputName.value)
        .subscribe(message => {
          alert(message);
          this.onAdd.emit(true);
        })
    }
  }

}
