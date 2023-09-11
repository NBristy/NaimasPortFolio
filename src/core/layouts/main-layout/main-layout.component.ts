import { Component, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public sidebarMenuOpened = true;
  @ViewChild('contentWrapper', { static: false }) 
  public contentWrapper: any;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.removeClass(document.querySelector('gs-root'), 'login-page');
    this.renderer.removeClass(
      document.querySelector('gs-root'),
      'register-page'
    );
    if (window.innerWidth < 1280) {
      this.sidebarMenuOpened = false;
      this.renderer.addClass(
        document.querySelector('gs-root'),
        'sidebar-collapse'
      );
    }
    let opened = sessionStorage.getItem('sidebarMenuOpened');
    if (opened == 'true') {
      this.sidebarMenuOpened = true;
      this.toggleMenuSidebar();

    }
  }

  public mainSidebarHeight(height: any) {
    // this.renderer.setStyle(
    //   this.contentWrapper.nativeElement,
    //   'min-height',
    //   height - 114 + 'px'
    // );
  }

  public toggleMenuSidebar() {
   console.log('sidebarMenuCollapsed', this.sidebarMenuOpened);
    if (this.sidebarMenuOpened) {
      sessionStorage.setItem('sidebarMenuOpened', 'true');
      this.renderer.removeClass(
        document.querySelector('gs-root'),
        'sidebar-open'
      );
      this.renderer.addClass(
        document.querySelector('gs-root'),
        'sidebar-collapse'
      );
      this.sidebarMenuOpened = false;
    } else {
      sessionStorage.setItem('sidebarMenuOpened', 'false');
      this.renderer.removeClass(
        document.querySelector('gs-root'),
        'sidebar-collapse'
      );
      this.renderer.addClass(document.querySelector('gs-root'), 'sidebar-open');
      this.sidebarMenuOpened = true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth < 1280) {
      this.sidebarMenuOpened = false;
      this.renderer.addClass(
        document.querySelector('gs-root'),
        'sidebar-collapse'
      );
    } else {
      this.renderer.removeClass(
        document.querySelector('gs-root'),
        'sidebar-collapse'
      );
    }
  }

}
