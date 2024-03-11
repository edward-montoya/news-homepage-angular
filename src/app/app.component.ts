import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './layout/header/header.component';
import { TopContainerComponent } from './components/top-container/top-container.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, HeaderComponent, TopContainerComponent, LatestNewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'news-homepage-angular';
}
