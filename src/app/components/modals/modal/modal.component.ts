import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() open: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  onCloseClick(): void {
    this.open = false;
    this.openChange.emit(this.open);
  }
}
