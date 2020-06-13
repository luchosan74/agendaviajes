import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  mv(){
    this.router.navigateByUrl('/reservas');
  }
  mf(){
    this.router.navigateByUrl('/form-reserva');
  }

}
