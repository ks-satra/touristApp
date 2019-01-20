import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: String = "";
  lname: String = "";
  constructor(public navCtrl: NavController) {

  }
  public show(){
    alert(this.name+" " +this.lname);
  }
  gotoPlace(){
    this.navCtrl.push(PlacePage);
  }

}
