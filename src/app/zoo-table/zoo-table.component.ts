import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Animal} from "../interface/animal";
import {MainService} from "../main.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-zoo-table',
  templateUrl: './zoo-table.component.html',
  styleUrls: ['./zoo-table.component.scss']
})
export class ZooTableComponent {
  zooData: Animal[] = [];
  public modalVisible: boolean = false;
  public mask: string = '+7(999)999-99-99';
  private counter: number = 0
  private selectedId: number | null = null;
  private _mainService: MainService = inject(MainService);
  protected form: FormGroup = this._mainService.form;

  public edit(animalId: number | null = null): void {
    this.modalVisible = true;
    this.selectedId = animalId;
    this.onEdit.emit(this.form.value);
  }
  @Input()
  public onEdit: EventEmitter<Animal | null> = new EventEmitter<Animal | null>();


  public hideModal(animalData: Animal | null): void {
    if (animalData) {
      if (!this.selectedId) {
        this.counter++;
        this.zooData.push({
          ...animalData,
          id: this.counter
        });
      } else {
        const editedAnimal: Animal | undefined = this.zooData.find((animal: Animal) => this.selectedId = animal.id);
        if (editedAnimal) {
          this.zooData[this.zooData.indexOf(editedAnimal)] = {
            ...animalData,
            id:this.selectedId
          };
        }
      }
    }
    this.modalVisible = false;
  }

  public delete(animalId: number | null = null): void  {
    const editedAnimal: Animal | undefined = this.zooData.find((animal: Animal) => animalId = animal.id);
    if (editedAnimal) {
      this.zooData = this.zooData.filter(item => item !== editedAnimal);
    }
}
}
