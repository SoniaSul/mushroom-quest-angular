import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LevelSelectComponent } from './level-select/level-select.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ProfileComponent } from './profile/profile.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { AvatarSelectComponent } from './avatar-select/avatar-select.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'levels', component: LevelSelectComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'map', component: WorldMapComponent },
  { path: 'avatars',component:AvatarSelectComponent}
];