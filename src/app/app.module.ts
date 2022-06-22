import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponentEditorComponent } from './pages/admin-component-editor/admin-component-editor.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminPageComponentListComponent } from './components/admin-page-component-list/admin-page-component-list.component';
import { AdminPageConstructorComponent } from './pages/admin-page-constructor/admin-page-constructor.component';
import { IndexComponent } from './pages/index/index.component';
import { ImgRightTextLeftFullscreenComponent } from './shared-components/img-right-text-left-fullscreen/img-right-text-left-fullscreen.component';
import { ImgLeftTextRightFullscreenComponent } from './shared-components/img-left-text-right-fullscreen/img-left-text-right-fullscreen.component';
import { ImgRightTextLeftComponent } from './shared-components/img-right-text-left/img-right-text-left.component';
import { ImgLeftTextRightComponent } from './shared-components/img-left-text-right/img-left-text-right.component';
import { AdvantagesComponent } from './shared-components/advantages/advantages.component';
import { AdvantagesSubTitleComponent } from './shared-components/advantages-sub-title/advantages-sub-title.component';
import { ServicesComponent } from './shared-components/services/services.component';
import { FaqComponent } from './shared-components/faq/faq.component';
import { StatsVerticalComponent } from './shared-components/stats-vertical/stats-vertical.component';
import { StatsHorizontalComponent } from './shared-components/stats-horizontal/stats-horizontal.component';
import { ServicesWithButtonComponent } from './shared-components/services-with-button/services-with-button.component';
import { FaqWithButtonComponent } from './shared-components/faq-with-button/faq-with-button.component';
import { AdvantagesSecondHeaderComponent } from './shared-components/advantages-second-header/advantages-second-header.component';
import { ServicesMiniComponent } from './shared-components/services-mini/services-mini.component';
import { AdvantagesSecondHeaderSubTitleComponent } from './shared-components/advantages-second-header-sub-title/advantages-second-header-sub-title.component';
import { AdminComponentPropEditorComponent } from './components/admin-component-prop-editor/admin-component-prop-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponentEditorComponent,
    AdminSidebarComponent,
    AdminPageComponentListComponent,
    AdminPageConstructorComponent,
    IndexComponent,
    ImgRightTextLeftFullscreenComponent,
    ImgLeftTextRightFullscreenComponent,
    ImgRightTextLeftComponent,
    ImgLeftTextRightComponent,
    AdvantagesComponent,
    AdvantagesSubTitleComponent,
    ServicesComponent,
    FaqComponent,
    StatsVerticalComponent,
    StatsHorizontalComponent,
    ServicesWithButtonComponent,
    FaqWithButtonComponent,
    AdvantagesSecondHeaderComponent,
    ServicesMiniComponent,
    AdvantagesSecondHeaderSubTitleComponent,
    AdminComponentPropEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
