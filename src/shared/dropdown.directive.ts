import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector:'[app-dropdown]'
})

export class dropdownDirective{
@HostBinding('class.open') IsOpen = false;

    @HostListener('click') djbhjghrop()
    {
        this.IsOpen = !this.IsOpen;
    }
}