import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent{
  @Input() 
  public buttonText: string;

  @Input() 
  public menuItemId: number;

  public intervalId: any;
  public scope = {
    wait : false,
    userId: null,
    userInfo: null,
    role: 3,
    isWorkExec: false,
    showQrInfo: false
  }
  constructor() {}
}
