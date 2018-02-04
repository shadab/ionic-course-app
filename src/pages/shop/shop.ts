import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { BuyoutPage } from '../buyout/buyout';

@Component({
    selector: 'page-shop',
    templateUrl: 'shop.html'
})
export class ShopPage{

    constructor(private navCtrl: NavController){

    }

    goToBuyout(){
        this.navCtrl.push(BuyoutPage);
    }

}