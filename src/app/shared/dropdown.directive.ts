import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') private isOpen: boolean;

  @HostListener('click') private toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
