import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThucHanh1Component } from './thuc-hanh1/thuc-hanh1.component';
import { ThucHanh1ParentComponent } from './thuc-hanh1-parent/thuc-hanh1-parent.component';
import { ThucHanh2ChildComponent } from './thuc-hanh2-child/thuc-hanh2-child.component';
import { ThucHanh2ParentComponent } from './thuc-hanh2-parent/thuc-hanh2-parent.component';
import { RatingBarChildComponent } from './rating-bar-child/rating-bar-child.component';
import { RatingBarParentComponent } from './rating-bar-parent/rating-bar-parent.component';
import { CountdowntTimerComponent } from './countdownt-timer/countdownt-timer.component';
import { CountdowntTimerAliasComponent } from './countdownt-timer-alias/countdownt-timer-alias.component';
import { CountdountTimerEventComponent } from './countdount-timer-event/countdount-timer-event.component';
import { CountdowntTimerEventAliasComponent } from './countdownt-timer-event-alias/countdownt-timer-event-alias.component';
import { CountdowntTimerGetSetComponent } from './countdownt-timer-get-set/countdownt-timer-get-set.component';
import { CountdowntTimerOnchangesComponent } from './countdownt-timer-onchanges/countdownt-timer-onchanges.component';
import { CountdowntParentComponent } from './countdownt-parent/countdownt-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ThucHanh1Component,
    ThucHanh1ParentComponent,
    ThucHanh2ChildComponent,
    ThucHanh2ParentComponent,
    RatingBarChildComponent,
    RatingBarParentComponent,
    CountdowntTimerComponent,
    CountdowntTimerAliasComponent,
    CountdountTimerEventComponent,
    CountdowntTimerEventAliasComponent,
    CountdowntTimerGetSetComponent,
    CountdowntTimerOnchangesComponent,
    CountdowntParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
