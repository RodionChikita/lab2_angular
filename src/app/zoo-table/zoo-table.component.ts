import {Component} from '@angular/core';
import {Animal} from "../interface/animal";


@Component({
  selector: 'app-zoo-table',
  templateUrl: './zoo-table.component.html',
  styleUrls: ['./zoo-table.component.scss']
})
export class ZooTableComponent {
  zooData: Animal[] = [];
  public modalVisible: boolean = false;
  public mask: string = '+7(999)999-99-99';
  public animal: Animal | undefined = undefined;
  private counter: number = 0
  private selectedId: number | null = null

  public edit(animalId: number | null = null): void {
    debugger;
    this.modalVisible = true;
    this.selectedId = animalId;
    this.animal = this.zooData.find((animal: Animal) => animalId === animal.id)
  }


  public hideModal(animalData: Animal | null): void {
    if (animalData) {
      if (!this.selectedId) {
        this.counter++;
        this.zooData.push({
          ...animalData,
          id: this.counter
        });
      } else {
        const editedAnimal: Animal | undefined = this.zooData.find((animal: Animal) => this.selectedId === animal.id);
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
