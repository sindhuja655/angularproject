import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  scrolledPercentage: any;


  constructor() { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    const height = window.innerHeight;
    this.scrolledPercentage = (offset / height * 100);
  }

  ngOnInit(): void {
  }

}
