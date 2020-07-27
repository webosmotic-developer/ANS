import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private _sidenav$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  get sidenav$(): Observable<boolean> {
    return this._sidenav$.asObservable();
  }

  open() {
    this._sidenav$.next(true);
  }

  close() {
    this._sidenav$.next(false);
  }
}
