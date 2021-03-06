import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ItemsService } from '../_services/items.service';
import { ItemModel } from '../_models/item.model';
import { IonItemSliding, NavController } from '@ionic/angular';

@Component({
  selector: 'app-items-list-item',
  templateUrl: './items-list-item.component.html',
  styleUrls: ['./items-list-item.component.scss']
})
export class ItemsListItemComponent implements OnInit {

  @Input() item: ItemModel;
  @ViewChild('slidingItem') slidingItem: IonItemSliding;

  constructor(
    private itemsService: ItemsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  edit() {
    this.navCtrl.navigateForward('/items/edit/' + this.item.id);
  }

  delete() {
    this.slidingItem.close(); 
    this.itemsService.delete(this.item.id).subscribe();
  }

}
