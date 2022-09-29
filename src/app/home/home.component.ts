import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  customerId: number | undefined;

  constructor(private meta: Meta, private title: Title,
    public router: Router, public route: ActivatedRoute) {
    this.meta.addTags([ 
      { name: 'description', content: 'This is an article about Angular Meta service' }, 
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' } ,
      { property: 'og:type', content: 'website' } ,
      { property: 'og:url', content: 'http://thenowtelevisionnetwork.snappages.site/media/series/gn9yf8v/successful-life-ministries' } ,
      { property: 'og:image', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } ,
      { property: 'og:thumbnail', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } 
  ]);
  }

  ngOnInit(): void {
    this.title.setTitle("From dashbaord page ...");
    this.meta.addTags([ 
      { name: 'description', content: 'This is an article about Angular Meta service' }, 
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' } ,
      { property: 'og:type', content: 'website' } ,
      { property: 'og:url', content: 'http://thenowtelevisionnetwork.snappages.site/media/series/gn9yf8v/successful-life-ministries' } ,
      { property: 'og:image', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } ,
      { property: 'og:thumbnail', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } 
  ]);
  this.meta.updateTag(
    { name: 'title', content: 'Custom Title' } 
);

  this.meta.updateTag(
    { property: 'og:thumbnail', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } 
);
  this.meta.updateTag(
    { property: 'type', content: 'website' } 
  );
  this.meta.updateTag(
    { property: 'og:url', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } 
  );
  this.meta.updateTag(
    { property: 'og:image', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } 
  );
  // this.customerId = +this.route.snapshot.paramMap.get('id');

    }

    called1(){
     
      this.router.navigate(['/dashboard/1']);
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    called2(){
     
      this.router.navigate(['/dashboard/2']);
      fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(json => console.log(json))
    }
}
