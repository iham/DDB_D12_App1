import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async takePicture() {
    const capturedPhoto = await Camera.getPhoto({
      quality: 100,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri,
    })
  }
}
