import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/Http';

import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserslistApiComponent } from './userslist-api/userslist-api.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { StreamingComponent } from './streaming/streaming.component';
import { UserFinderComponent } from './user-finder/user-finder.component';
import { UserFormComponent } from './user-form/user-form.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LogoComponent,
    MenuComponent,
    SidebarComponent,
    UserslistComponent,
    UserDetailsComponent,
    UserslistApiComponent,
    NewsComponent,
    EventsComponent,
    StreamingComponent,
    UserFinderComponent,
    UserFormComponent,
    VideoplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NewsComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'streamings',
        component: StreamingComponent
      },
      {
        path: 'users',
        component: UserslistComponent
      },
      {
        path: 'users-api',
        component: UserslistApiComponent
      },
      {
        path: 'users-finder',
        component: UserFinderComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
