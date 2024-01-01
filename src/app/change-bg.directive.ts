import { Directive,ElementRef,HostListener,Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
@Input() isCorrect:boolean=false;
  constructor(private ef:ElementRef,private render:Renderer2) { }
@HostListener('click') answer(){
  if(this.isCorrect){
    this.render.setStyle(this.ef.nativeElement, 'box-shadow', '0 0 2px 2px green');
    this.render.setStyle(this.ef.nativeElement,'border','1px solid green');
  }
  else{
    this.render.setStyle(this.ef.nativeElement, 'box-shadow', '0 0 2px 2px red');
    this.render.setStyle(this.ef.nativeElement,'border','1px solid red');

  }
}

}
