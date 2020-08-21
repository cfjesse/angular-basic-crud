import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CancelWarningComponent } from '../modals/cancel-warning/cancel-warning.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class ModalService {
  private currentModal;
  constructor(private dialog: MatDialog) { }

  openWarningModal(data?: any): Observable<any> {
    this.currentModal = this.dialog.open(CancelWarningComponent, { width: '300px' });
    console.log(`********************* this.currentModal`, this.currentModal);
    return this.currentModal.afterClosed();
  }


  // Utility methdod for forcing the current modal to close
  closeCurrentModal(): void {
    this.currentModal.close();
  }
}
