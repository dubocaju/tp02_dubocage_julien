import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormInput]'
})
export class FormInputDirective {
  @Input() appCtrlData: string = "";

  constructor(private el: ElementRef) {}


  @HostListener('blur') OnBlur() {
    let regexp = new RegExp(this.appCtrlData);
    if (!regexp.test(this.el.nativeElement.value)) {
      this.el.nativeElement.classList.add('is-invalid');
    } else {
      this.el.nativeElement.classList.remove('is-invalid');
    }
  }

}
