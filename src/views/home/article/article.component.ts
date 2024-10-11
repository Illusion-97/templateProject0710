import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Article} from "../../../models/article";
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../../services/article.service';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './article.component.html',
    styleUrl: './article.component.css'
})
export class ArticleComponent {

    @Input({required: true}) article!: Article;

    @Output() articleDeteleted: EventEmitter<never> = new EventEmitter<never>()

    private service : ArticleService = inject(ArticleService)

    delete(id: number) {
        this.service.delete(id).subscribe({
            next: () => this.articleDeteleted.emit()
        })
    }
}
