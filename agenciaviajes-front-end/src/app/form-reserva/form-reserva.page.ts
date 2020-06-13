import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.page.html',
  styleUrls: ['./form-reserva.page.scss'],
})
export class FormReservaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  mv(){
    this.router.navigateByUrl('/reserva');

  }

}
