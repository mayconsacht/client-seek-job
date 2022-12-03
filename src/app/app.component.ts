import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  user = {
    name: "Hello"
  };
  readonly menus: Array<PoMenuItem> = [
    { label: 'Meu currículo', action: this.onClick.bind(this) },
    { label: 'Oportunidades', action: this.onClick.bind(this) },
  ];

  constructor(public auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.user = {
      name: "Hello"
    };
  }

  onClick(): void {
    alert('Infelizmente não deu tempo para implementar essa funcionalidade :)');
  }
}
