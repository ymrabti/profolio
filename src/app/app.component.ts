import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pro-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pro-folio';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
