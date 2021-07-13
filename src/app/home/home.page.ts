import { CreateAvionPage } from './../create-avion/create-avion.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  avionProperties = []

  constructor(private router: Router, public modalController: ModalController, private routerOutlet: IonRouterOutlet) { }

  showPropertiesAvion(idAvion) {
    this.router.navigate(['/avion-detail/', idAvion])
  }

  async createAvion() {
    const modal = await this.modalController.create({
      component: CreateAvionPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
      // cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(data => {
      this.avionProperties = JSON.parse(localStorage.getItem('avionProperties'))
    });
    return await modal.present();
  }

  ngOnInit() {
    this.avionProperties = JSON.parse(localStorage.getItem('avionProperties'))
  }

  deleteItem(avionId) {
    let allItems = JSON.parse(localStorage.getItem('avionProperties'))
    if (allItems.length == 1) {
      let filterItems = allItems.filter(x => x.id !== avionId);
      console.log(filterItems)
      localStorage.removeItem('avionProperties');
      localStorage.setItem('avionProperties', JSON.stringify(filterItems));
      this.avionProperties = JSON.parse(localStorage.getItem('avionProperties'))
      localStorage.removeItem('avionProperties');
    } else {
      let filterItems = allItems.filter(x => x.id !== avionId);
      console.log(filterItems)
      localStorage.removeItem('avionProperties');
      localStorage.setItem('avionProperties', JSON.stringify(filterItems));
      this.avionProperties = JSON.parse(localStorage.getItem('avionProperties'))
    }

  }

}
