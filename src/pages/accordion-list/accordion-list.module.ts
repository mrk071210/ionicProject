import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccordionListPage } from './accordion-list';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    AccordionListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AccordionListPage)
  ],
  exports: [
    AccordionListPage
  ]
})
export class AccordionListPageModule {}
