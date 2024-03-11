import { Component } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Observable } from 'rxjs';
import { INews } from '../../@types/news';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-container.component.html',
  styleUrl: './top-container.component.scss'
})
export class TopContainerComponent {

  news: Observable<INews[]>;

  constructor(private newsService: NewsService) {
    this.news = newsService.getTopNews();
  }
}
