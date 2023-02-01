import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert, AlertType } from '../alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _subject = new Subject<Alert>();
  private _id = 0;

  constructor() { }

  getObservable(): Observable<Alert> {
    return this._subject.asObservable();
  }

  info(title: string, message: string, timeout = 3000) {
    this._subject.next(new Alert(this._id++, AlertType.info, title, message, timeout));
  }

  success(title: string, message: string, timeout = 3000) {
    this._subject.next(new Alert(this._id++, AlertType.success, title, message, timeout));
  }

  warning(title: string, message: string, timeout = 3000) {
    this._subject.next(new Alert(this._id++, AlertType.warning, title, message, timeout));
  }

  error(title: string, message: string, timeout = 0) {
    this._subject.next(new Alert(this._id++, AlertType.error, title, message, timeout));
  }
}
