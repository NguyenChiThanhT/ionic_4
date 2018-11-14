import {Component} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {ModalPagePage} from '../modal-page/modal-page.page';
import {ActionSheetOptions} from '@ionic/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {

    }

    async persentModal() {
        const modal = await this.modalCtrl.create({
            component: ModalPagePage,
            componentProps: {value: 123}
        });
        await modal.present();
    }

    async presentActionSheet() {
        const options: ActionSheetOptions = {
            header: 'Controls',
            subHeader: 'Player Controls',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        const actionSheet = await this.actionSheetCtrl.create(options);
        await actionSheet.present();
    }
}
