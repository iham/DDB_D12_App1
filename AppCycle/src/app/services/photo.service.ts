import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { of, switchMap } from 'rxjs';
import {fromPromise} from 'rxjs/internal/observable/innerFrom';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async takePicture() {
    return fromPromise(Camera.checkPermissions()).pipe(
      switchMap(permissionStatus => {
        if(permissionStatus.camera === 'granted') {
          const capturedPhoto = Camera.getPhoto({
            quality: 100,
            source: CameraSource.Camera,
            resultType: CameraResultType.DataUrl,
          });
          return fromPromise(capturedPhoto).pipe();
        }
        else {
          return of(null);
        }
      })
    );
  }
}
