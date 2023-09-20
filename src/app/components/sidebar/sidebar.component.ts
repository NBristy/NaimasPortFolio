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
  public isOpen = true;

  @Output() 
  public mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

  public scope = {
  };

  constructor(
    private renderer: Renderer2, 
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  /** ngOnChanges */
  public ngOnChanges(): void {
  };

  public toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

}
