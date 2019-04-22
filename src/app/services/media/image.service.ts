import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Util } from 'src/app/util';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private util: Util = new Util();

  constructor() { }

  getBase64ImageFromURL(resName: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = `${this.util.storageUrl}/${resName}`;

      console.log(`${this.util.storageUrl}/${resName}`);

      if(!img.complete) {
        img.onload = () => {
          observer.next(this.base64Image(img));
          observer.complete();
        }

        img.onerror = (error) => {
          observer.error(error);
        }
      }
      else
      {
        observer.next(this.base64Image(img));
        observer.complete();
      }
    })
  }

  base64Image(img: HTMLImageElement) {
    
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext('2d');

    context.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('image/png');

    return dataURL;
  }


}
