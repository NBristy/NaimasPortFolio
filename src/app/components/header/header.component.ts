import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter<void>();

  public account: any = {};

  public scope = {
    notification : [],
    readNotificationIdList : [],
    notificationCount : 0,
    tenantSelectLabel : "テナント未選択",
    offlineMode : false
  }


  constructor() {
  }

  public ngOnInit(): void {
  }
  

  public signout() {
  }
  public logout() {}

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

}
