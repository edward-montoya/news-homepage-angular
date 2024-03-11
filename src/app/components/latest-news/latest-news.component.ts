import { Component } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Observable } from 'rxjs';
import { INews } from '../../@types/news';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
  
  public news: Observable<INews[]>;

  constructor(private newsService: NewsService) {
    this.news = newsService.getLatestNews();
  }


}
