import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { LatestNewsComponent } from '../../components/latest-news/latest-news.component';
import { TopContainerComponent } from '../../components/top-container/top-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, LatestNewsComponent, TopContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
