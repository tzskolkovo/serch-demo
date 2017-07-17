import { Component, OnInit } from '@angular/core';

class MenuLink {
  constructor(private link: string, private title: string,private className: string) { }
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
public links: Array<MenuLink> = [
  new MenuLink('#', 'LIVE', 'live'),
  new MenuLink('#', 'СОБЫТИЯ', ''),
  new MenuLink('#', 'СЕРВИСЫ', ''),
  new MenuLink('#', 'ГОРОД', ''),
  new MenuLink('#', 'НОВОСТИ', ''),
  new MenuLink('#', 'ОБРАТНАЯ СВЯЗЬ', '')
 ];

  constructor() { }

  ngOnInit() {

  }

}
