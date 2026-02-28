import { Component, inject, input, TemplateRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  template: `
    <ng-template #modalTemplate let-modal>
      <div class="modal-header">
        <ng-content select="[title]"></ng-content>
        <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
      </div>
      <div class="modal-body">
        <ng-content select="[body]"></ng-content>
      </div>
      <div class="modal-footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </ng-template>
  `,
})
export class Modal {
  private modalService = inject(NgbModal);
  
  readonly modalClass = input<string>('');
  readonly modalTemplate = viewChild<TemplateRef<string>>('modalTemplate');
  
  private modalRef: NgbModalRef | null = null;

  openModal() {
    this.modalRef = this.modalService.open(this.modalTemplate(), {
      centered: true,
      size: this.modalClass() || 'lg',
    });
  }

  closeModal() {
    this.modalRef?.close();
  }

  ngOnDestroy() {
    if (this.modalRef) {
      this.modalRef.dismiss();
    }
  }
}
