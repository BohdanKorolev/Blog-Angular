import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {AddCategoryModalComponent} from "./add-category-modal/add-category-modal.component";
import {RemoveCategoryModalComponent} from "./remove-category-modal/remove-category-modal.component";
import {BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {Post, PostService} from "../../../services/post.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  categories: Array<any> = new Array<any>();
  newPostForm: FormGroup;
  quillEditorPhotoConf = {
    toolbar: [
      [
        'image'
      ]
    ]
  }

  constructor(
    private categoryService: CategoryService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private postService: PostService
  ) {
    this.newPostForm = new FormGroup({
      inputCategory: new FormControl('', [
        Validators.required
      ]),
      inputTitle: new FormControl('', [
        Validators.required
      ]),
      inputBanner: new FormControl('', [
        Validators.required
      ]),
      inputInfo: new FormControl('', [
        Validators.required
      ])
    })
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

  createPost() {
    this.spinner.show();
    if (Object.keys(this.newPostForm.controls)
      .filter((input: any) => this.newPostForm.controls[input].errors?.required).length
    ) {
      alert('Please fill in all fields');
      this.spinner.hide()
    }
    else {
      const postObject: Post = {
        categoryId: this.newPostForm.controls.inputCategory.value,
        title: this.newPostForm.controls.inputTitle.value,
        bannerImg: this.newPostForm.controls.inputBanner.value.replace(/(<p>)(<\/p>)/gm, ''),
        content: this.newPostForm.controls.inputInfo.value,
        author: JSON.parse(<string>localStorage.getItem('user')).login,
        dateTime: new Date()
      };
      this.postService.createPost(postObject)
        .subscribe(message => {
          console.log(message);
          this.spinner.hide();
          this.router.navigate(['/']);
        })
    }
  }
}
