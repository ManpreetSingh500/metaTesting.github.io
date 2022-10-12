import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {

      this.meta.updateTag(
        { name: 'og:title', content: "From About Component ..." }
      );
      this.meta.updateTag(
        { property: 'og:thumbnail', content: 'https://assets.snappages.site/global/assets/theme/church/children_02.jpg' }
      );
      this.meta.updateTag(
        { property: 'og:url', content: 'https://assets.snappages.site/global/assets/theme/church/children_02.jpg' }
      );
      this.meta.updateTag(
        { property: 'og:image', content: 'https://assets.snappages.site/global/assets/theme/church/children_02.jpg' }
      );
  }

}
