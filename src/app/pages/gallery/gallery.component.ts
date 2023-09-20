import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url: string;
}
interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public pageTitle = "Image Gallery";
  images: ImageInfo[] = [];
  portraitImages: ImageInfo[] = [];
  landscapeImages: ImageInfo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadImages();
  }

  public loadImages(): void {
    const imagePaths = [
      'https://picsum.photos/400/200',
      'https://picsum.photos/200/300',
      'https://picsum.photos/600/200',
      'https://picsum.photos/200/400',
      'https://picsum.photos/200/300',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/500',
      'https://picsum.photos/600/200',
      'https://picsum.photos/800/500',
      'https://picsum.photos/900/400',
      'https://picsum.photos/150/500',
    ];

    let loadedCount = 0;

    for (const path of imagePaths) {
      const image = new Image();
      image.src = path;
      image.onload = () => {
        loadedCount++;
        this.images.push({
          src: path,
          width: image.width,
          height: image.height
        });
  
        // Check if all images are loaded
        if (loadedCount === imagePaths.length) {
          this.splitImages(); // Split images after all are loaded
        }
      };
    }
  }
  private splitImages(): void {
    for (const image of this.images) {
      if (image.width > image.height) {
        this.landscapeImages.push(image);
      } else {
        this.portraitImages.push(image);
      }
    }
  }

  public uploadImage() {
    //add upload code
  }
}
