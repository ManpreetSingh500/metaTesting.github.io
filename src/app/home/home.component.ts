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
  }

  ngOnInit(): void {

    //   this.meta.addTags([ 
    //     { name: 'description', content: 'This is an article about Angular Meta service' }, 
    //     { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' } ,
    //     { property: 'og:type', content: 'website' } ,
    //     { property: 'og:url', content: 'http://thenowtelevisionnetwork.snappages.site/media/series/gn9yf8v/successful-life-ministries' } ,
    //     { property: 'og:image', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } ,
    //     { property: 'og:thumbnail', content: 'https://images.subsplash.com/image.jpg?id=663db305-c622-4f82-8d00-4713d0f46762&w=800&h=450' } 
    // ]);

    // this.title.setTitle("From home page ...");

    // this.customerId = +this.route.snapshot.paramMap.get('id');

  }

  called1() {

    this.router.navigate(['/dashboard/1']);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.meta.updateTag(
          { name: 'title', content: json.title }
        );
        this.meta.updateTag(
          { property: 'thumbnail', content: 'https://img.freepik.com/free-vector/house-logo-template-vector-interior-design-business_53876-136740.jpg?w=740&t=st=1664740027~exp=1664740627~hmac=8fc40d9b6e3502bd35bf06c0825960325d12b801232e71b4102d70be4c699758' }
        );
        this.meta.updateTag(
          { property: 'url', content: 'https://img.freepik.com/free-vector/house-logo-template-vector-interior-design-business_53876-136740.jpg?w=740&t=st=1664740027~exp=1664740627~hmac=8fc40d9b6e3502bd35bf06c0825960325d12b801232e71b4102d70be4c699758' }
        );
        this.meta.updateTag(
          { property: 'image', content: 'https://img.freepik.com/free-vector/house-logo-template-vector-interior-design-business_53876-136740.jpg?w=740&t=st=1664740027~exp=1664740627~hmac=8fc40d9b6e3502bd35bf06c0825960325d12b801232e71b4102d70be4c699758' }
        );
      }
      )
  }
  called2() {
    
    this.router.navigate(['/about']);
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}
