import { Component, EventEmitter, Output } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Minipost, MiniPostComponent } from "./mini-post/mini-post.component";
import { SearchComponent } from "./search/search.component";
import { NgFor, NgIf, SlicePipe, TitleCasePipe } from '@angular/common';
import { TruncatePipe } from "../../tools/truncate.pipe";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FooterComponent, MiniPostComponent, SearchComponent, TitleCasePipe /*, NgFor, NgIf*/, TruncatePipe, SlicePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  textParent: string = "Lorem Ipsum"
  imgSrcParent: string = "pic09.jpg"

  minipost1: Minipost = {
    text: 'Lorem',
    href: '##',
    imageAlt: '',
    imageSrc: 'pic04.jpg'
  }

  // Préparer le composant à transmettre une information à ceux qui l'apellent
  @Output() moreClick: EventEmitter<string> = new EventEmitter<string>()

  onMoreButtonClick() {
    alert('More Clicked !')
    this.moreClick.emit("More")
  }

  setTextParent(value: string) {
    this.textParent = value
  }

  miniposts: Minipost[] = [
    {
        href: '#',
        imageSrc: 'pic07.jpg',
        imageAlt: 'Halte',
        text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.'
    },
    {
        href: '#',
        imageAlt: 'Halte',
        text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.'
    },
    {
        href: '#',
        imageSrc: '',
        imageAlt: 'Halte',
        text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.'
    },
    this.minipost1,
    {
        href: '#',
        imageSrc: 'pic09.jpg',
        imageAlt: 'Halte',
        text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.'
    }
]

}
