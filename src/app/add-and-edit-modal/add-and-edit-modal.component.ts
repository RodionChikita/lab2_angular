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
  protected _names: string[] = ["Вася", "Петя", "Шарик"];

  @Output()
  public onSave: EventEmitter<Animal | null> = new EventEmitter<Animal | null>();

  protected currentDate: Date = new Date();
  protected mask: string = '+7(999)999-99-99';
  protected form: FormGroup = this._mainService.form;

  public save() {
    this.onSave.emit(this.form.value);
  }

  public cancel(): void {
    this.onSave.emit(null);
  }
}
