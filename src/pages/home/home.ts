import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ServiecsPage } from '../serviecs/serviecs';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// fn ควบคุมการเปลี่ยนหน้า
  constructor(public navCtrl: NavController) {

  }
  gotoProfile(){

    //alert(")
    this.navCtrl.push(ProfilePage) //คำสั่งเปิดเพจ
  }
  gotoServiecs(){
    this.navCtrl.push(ServiecsPage) //คำสั่งเปิดเพจ

  }
  gotoInfo(){
    this.navCtrl.push(InfoPage) //คำสั่งเปิดเพจ

  }

}
