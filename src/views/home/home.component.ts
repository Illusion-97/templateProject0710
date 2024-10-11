import { Component } from '@angular/core';
import { Article } from '../../models/article';
import {ArticleComponent} from './article/article.component';
import { ArticleService } from '../../services/article.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArticleComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //data: Article[] = [];
  data!: Observable<Article[]>;

  constructor(protected service: ArticleService, route: ActivatedRoute) {
    ///this.getArticles()
    this.data = route.data.pipe( // poureffectuer différentes opérations sur la valeur transmise ou l'etat de l'observable
      //map(data => data['articles']))
      map(({articles}) => articles))
  }

  getArticles() {
    this.data = this.service.all()/*.subscribe(articles => this.data = articles)*/
  }
}
