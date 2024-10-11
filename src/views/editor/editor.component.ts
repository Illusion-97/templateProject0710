import { Component, inject } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AbstractFormGroupComponent } from '../../tools/abstract-form-group-component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent extends AbstractFormGroupComponent {

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    src: new FormControl(""),
    titre: new FormControl("", {validators: Validators.required}),
    lien: new FormControl("#", {validators: Validators.required, nonNullable:true}),
    alt: new FormControl("", {validators: Validators.required}),
    description: new FormControl("", {validators: Validators.required})
  })

  router: Router = inject(Router)

  /*constructor(private service: ArticleService, route: ActivatedRoute) {
    super()   
    const observableMap : Observable<ParamMap> = route.paramMap;
    observableMap.subscribe(observableValue => {
      const routeId : string = observableValue.get('id') || "0"
      const id : number = +routeId
      const obsArticle = service.byId(id)
      obsArticle.subscribe({
        next: article => {
          this.form.patchValue(article)
        },
        error: () => {
          this.form.reset({
            id: 0,
            titre: "Un Article",
            src: "pic07.jpg",
            alt: "Halte",
            description: "Une description"
          })
        },
        complete: () => console.log("Observable complete")
      })
    })
  }*/

    constructor(private service: ArticleService, route: ActivatedRoute) {
      super()  
      const observableMap : Observable<ParamMap> = route.paramMap;
      observableMap.subscribe(observableValue => {
        const routeId : string = observableValue.get('id') || "0"
        const id : number = +routeId
        const obsArticle = service.byId(id).pipe(catchError(() => of(undefined)))
        obsArticle.subscribe(article => {
          if(article) this.form.patchValue(article)
            else this.form.reset({
              id: 0,
              titre: "Un Article",
              src: "pic07.jpg",
              alt: "Halte",
              description: "Une description"
            })
        })
      })
    }

  onSubmit$(): void {
    /*const observable : Observable<Article> = this.form.value.id 
      ? this.service.update(this.form.value) 
      : this.service.save(this.form.value)

    observable.subscribe(response => console.log(response))*/

    
    /*(this.form.value.id 
      ? this.service.update(this.form.value) 
      : this.service.save(this.form.value)
    ).subscribe(response => console.log(response))*/

    this.service[this.form.value.id ? 'update' : 'save'](this.form.value).subscribe(() => this.router.navigate(['/']))
  }
}
