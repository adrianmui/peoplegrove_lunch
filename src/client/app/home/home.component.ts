import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransferState } from '../../modules/transfer-state/transfer-state';

@Component({
  selector: 'home',
  template: `<h3>{{ message }}</h3>`
})
export class Home implements OnInit {
  public message: string;

  constructor(private transferState: TransferState) {}

  ngOnInit() {
    this.message = this.transferState.get('message');
  }
}
