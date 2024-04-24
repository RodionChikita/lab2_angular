import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MainService} from "../main.service";
import {FormGroup} from "@angular/forms";
import {Animal} from "../interface/animal";

@Component({
  selector: 'app-add-and-edit-modal',
  templateUrl: './add-and-edit-modal.component.html',
  styleUrls: ['./add-and-edit-modal.component.scss']
})
export class AddAndEditModalComponent {
  private _mainService: MainService = inject(MainService);

  @Output()
  public onSave: EventEmitter<Animal | null> = new EventEmitter<Animal | null>();

  public currentDate: Date = new Date();
  public mask: string = '';

  public form: FormGroup = this._mainService.form;

  public save() {
    this.onSave.emit(this.form.value);
  }

  public cancel(): void {
    this.onSave.emit(null);
  }
}
