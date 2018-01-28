import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name = '';
  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToByeBye() {
    this.route.navigate(['/goodbye' + this.name]);
  }

}
