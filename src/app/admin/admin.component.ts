import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})
export class AdminComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  submitForm(title: string, teaser: string, author: string, body: string, imgURL) {
    let newArticle: Article = new Article(title, teaser, author, body, imgURL);
    this.articleService.addArticle(newArticle);
  }
}
