export class Article {
  public done: boolean = false;
  public views: number = 0;
  constructor(public title: string, public teaser: string, public author: string, public body: string, public imgURL: string){}
}
