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
    this.title.setTitle("From About Component ...");
  }

}
