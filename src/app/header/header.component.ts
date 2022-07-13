import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public collapsed = true;

  @Output()
  private featureSelected: EventEmitter<string> = new EventEmitter<string>();

  public onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
