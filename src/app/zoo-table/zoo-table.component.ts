import { Component } from '@angular/core';
import {Animal} from "../interface/animal";

@Component({
  selector: 'app-zoo-table',
  templateUrl: './zoo-table.component.html',
  styleUrls: ['./zoo-table.component.scss']
})
export class ZooTableComponent {
  zooData: Animal[] = [];
  public modalVisible: boolean = false;

  public counter: number = 0;
  public selectedId: number | null = null;

  // zooOptions: any = {
  //   mode: 'popup',
  //   allowUpdating: true,
  //   allowAdding: true,
  //   allowDeleting: true,
  //   useIcons: true
  // };

  public edit(animalId: number | null = null): void {
    this.modalVisible = true;
    this.selectedId = animalId;
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
            ...animalData
          };
        }
      }

    }
    this.modalVisible = false;
  }
}
