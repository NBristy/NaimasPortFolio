import { Component, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('mainSidebar', { static: false }) 
  public mainSidebar: any;

  @Output() 
  public mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

  public scope = {
    isPc : true,
    show: false,
    menuItems: [{}],
    menus : []
  };

  constructor(
    private renderer: Renderer2, 
    private router: Router
  ) {
    if (window.innerWidth <= 480) {
      this.scope.isPc = false;
    }
  }

  ngOnInit(): void {
    this.scope.show = true;
    this.scope.menuItems = [{
      name: 'GAUDiEYE',
      iconClasses: 'fas fa-tachometer-alt',
      children: [
        {
          name: 'Camera View',
          iconClasses: 'far fa-th',
          path: ['/gaudi/camera']
        },
        {
          name: 'Analytics',
          iconClasses: 'far fa-th',
          path: ['/gaudi/analytics']
        }
      ]
    }, {
      name: '端末設定',
      iconClasses: 'fas fa-laptop-code',
      path: ['/device/index']
    }];
  }

  /** ngOnChanges */
  public ngOnChanges(): void {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  };

  /**  */
  public styleClass(path: string) {
    if (path.indexOf('/admin/system') == -1) {
      return this.router.url.indexOf(path) > -1 ? 'active' : '';
    } else {
      let classes = '';
      return this.router.url.indexOf(path) > -1 ? `active ${classes}` : `${classes}`;
    }
  }

  
  public isActive(path: string) {
    return this.router.url.indexOf(path) > -1;
  }

  public routerLink(path: string) {
    this.router.navigate([path]);
    this.renderer.removeClass(
      document.querySelector('gs-root'),
      'sidebar-open'
    );

  }


  
  // public open(ele: any, menu: any) {
  //   if (ele.children && ele.children.length > 0) {
  //     this.scope.menus[menu] = this.scope.menus[menu] ? !this.scope.menus[menu] : true;
  //   } else {
  //     this.router.navigate([ele.path]);

  //   }
  // }
  // public isOpen(ele, menu) {

  //   if (ele.children && ele.children.length > 0) {
  //     if (!this.scope.menus[menu]) {
  //       this.scope.menus[menu] = false;
  //     }
  //     if (this.router.url.indexOf(ele.path) > -1) {
  //       this.scope.menus[menu] = true;
  //     }
  //     return this.scope.menus[menu];  
  //   }
  //   return false;
  // }

}
