import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-post',
  standalone: true,
  imports: [],
  templateUrl: './mini-post.component.html',
  styleUrl: './mini-post.component.css'
})
export class MiniPostComponent {
  // @Input() précise que le composant est prêt à recevoir une information
  //@Input({required: true}) text! : string; // ne sera pas undefined (attention à vous assurer que votre code prévoit cette gestion)
  //@Input() imgSrc? : string // equivalent : string | undefined
  //href: string = "#"
  //imageAlt: string = ""

  minipostClass : MinipostClass = new MinipostClass("Lorem", "#", "", "pic08.jpg");
  minipostClassWithDefaults : MinipostClassWithDefaults = new MinipostClassWithDefaults();

  @Input({required: true}) minipost! : Minipost
}

export class MinipostClass {
  text: string
  imageSrc? : string
  href: string
  imageAlt: string

  constructor(text: string, href : string, imageAlt: string, imageSrc?: string) {
    this.text = text
    this.imageSrc = imageSrc
    this.href = href
    this.imageAlt = imageAlt
  }
}

export class MinipostClassWithDefaults {
  text: string = "Lorem Ipsum"
  imageSrc? : string
  href: string = "#"
  imageAlt: string = ""
}

export interface Minipost {
  text: string
  imageSrc? : string
  href: string
  imageAlt: string
}