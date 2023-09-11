import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // private timeAgo;
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  
  // public options$ = new BehaviorSubject<AnimationOptions>({
  //   path: '/assets/lottie/icon-bell.json',
  // });
  
  private locales = [
    { label: '🇯🇵 Japanese (JP)', value: 'ja-JP' },
    { label: '🇺🇸 English (US)', value: 'en-US' },
  ];

  public account: any = {};

  public scope = {
    notification : [],
    readNotificationIdList : [],
    notificationCount : 0,
    tenantSelectLabel : "テナント未選択",
    offlineMode : false
  }
  // @ViewChild('dropdownMenu', { static: false }) 
  // public dropdownMenu;


  // @ViewChild('dropdownLangMenu', { static: false }) 
  // public dropdownLangMenu;

  // @ViewChild('dropdownBellMenu', { static: false }) 
  // public dropdownBellMenu;


  constructor(
    // private authService: AuthService,
    //            private dialog: MatDialog,
    //            private router: Router,
    //            private toastr: GSToastService,
    //            private renderer: Renderer2
               ) {
    // this.timeAgo = new TimeAgo('en-US')
          
  }

  public ngOnInit(): void {
    if (localStorage.getItem('offlineModeOn') == 'true') {
      this.scope.offlineMode = true;
    }
    // this.authService.me().subscribe((e) => {
    //   this.account = e;
    //   console.log(e)
    //   // this.render();
    // });
  }
  // ngOnChanges
  // public ngOnChanges() {

  // }

  // public render() {

  // }
  // public toggleDropdownMenu(type) {
  //   if (type == 'lang') {
  //     if (this.dropdownLangMenu.nativeElement.classList.contains('show')) {
  //       this.hideDropdownMenu(this.dropdownLangMenu);
  //     } else {
  //       this.showDropdownMenu(this.dropdownLangMenu);
  //     }
  //   } else if (type == 'bell') {
  //     if (this.dropdownBellMenu.nativeElement.classList.contains('show')) {
  //       this.hideDropdownMenu(this.dropdownBellMenu);
  //     } else {
  //       this.showDropdownMenu(this.dropdownBellMenu);
  //     }
  
  //   } else {
  //     if (this.dropdownMenu.nativeElement.classList.contains('show')) {
  //       this.hideDropdownMenu(this.dropdownMenu);
  //     } else {
  //       this.showDropdownMenu(this.dropdownMenu);
  //     }
  
  //   }
  // }

  // public showDropdownMenu(ele) {
  //   this.renderer.addClass(ele.nativeElement, 'show');
  // }

  // public hideDropdownMenu(ele) {
  //   this.renderer.removeClass(ele.nativeElement, 'show');
  // }

  // public dispTime(strDate) {
  //   return this.timeAgo.format(moment(strDate).toDate());
    
  // }

  public signout() {
    // this.authService.logout();
  }
  public logout() {}

}
