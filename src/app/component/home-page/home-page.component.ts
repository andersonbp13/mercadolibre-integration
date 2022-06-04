import { Component, OnInit } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { MercadolibreService } from "../../service/mercadolibre.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  item = "";

  constructor(private mercadolibreService: MercadolibreService, private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.mercadolibreService.search(this.item).subscribe((response) => {
      let results: any = response;
      this.router.navigate(['/search'], {state: {data: results}});
    });
  }

}
