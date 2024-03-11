import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, find, from, map, of } from 'rxjs';
import { INews } from '../@types/news';
import { initialData } from './initialData';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news = of(initialData);

  constructor() { }

  getTopNews() {
    return this.news.pipe(map((element) => {
      return element.filter(el => el.top3);
    }));
  }

  getLatestNews() {
    return this.news.pipe(map((element) => {
      return element.filter(el => el.latest);
    }));
  }

  getHome() {
    return this.news.pipe(map((element) => {
      return element.find(el => el.home);
    }));
  }
}
