import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
  
})
export class PopOverService {
  popover;
  constructor(
    public popoverController: PopoverController
    ) {

     }

     async presentPopover(PopComponent: any) {
      this.popover= await this.popoverController.create({
        component: PopComponent,
        translucent: true,
        backdropDismiss:false
      });
      return await this.popover.present();
    }

    async Dismiss() {
          await this.popover.dismiss();
  }
}
