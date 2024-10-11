import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractCRUDService } from '../tools/abstract-crudservice';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends AbstractCRUDService<Article> {

  END_POINT = environment.API_URL + "664/articles" 

}
