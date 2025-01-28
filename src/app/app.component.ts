import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Platform} from "@ionic/angular";
import {Device} from "@capacitor/device";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private translateService: TranslateService,
              private platform: Platform) {
    this.translateService.setDefaultLang('es');
    this.initApp();
  }

  initApp() {
    this.platform.ready().then(async () => {
      const lang = await Device.getLanguageCode();

      if (lang.value) {
        this.translateService.use(lang.value.slice(0, 2))
      }
    })
  }
}
