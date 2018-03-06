import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,AlertController} from 'ionic-angular';

/**
 * Generated class for the PopupModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popup-modal',
  templateUrl: 'popup-modal.html',
})
export class PopupModalPage {
  rootPage: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    ) {}

    openHintModal() {
      this.openModal('HintModalPage');
    }
  
    openWalkthroughModal() {
      this.openModal('WalkthroughModalPage');
    }
  
    openSignupModal() {
      this.openModal('SignupModalPage');
    }
  
    openModal(pageName) {
      this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                    .present();
    }

}
