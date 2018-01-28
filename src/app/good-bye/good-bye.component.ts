import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-good-bye',
  templateUrl: './good-bye.component.html',
  styleUrls: ['./good-bye.component.css']
})
export class GoodByeComponent implements OnInit {
  router: any;
  name: any;
  constructor(private active: ActivatedRoute) { }

  ngOnInit() {
    this.router = this.active.params.subscribe(params => {
      this.name = params.name;
    });
  }

}
