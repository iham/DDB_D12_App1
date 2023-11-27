import { PhotoService } from './../services/photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  
  constructor(private photoService:PhotoService) {}

  getProfileImage() {
    return localStorage.getItem('photo') ?? '';
  }
  async addPhoto() {
    console.log('add Photo');
    await this.photoService.takePicture().then(photo => {
      photo.subscribe(async photo => {
        localStorage.setItem('photo', photo?.dataUrl ?? '');
      })
    });
  }
}
