import { useState, useEffect } from 'react'
import { isPlatform } from '@ionic/react'
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences'
import { Capacitor } from '@capacitor/core'

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const [photo, setPhoto] = useState<UserPhoto>()

  const takePhoto = async() => {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + '.jpeg';
    const newPhoto = {
      filepath: fileName,
      webviewPath: capture.webPath,
    };
    setPhoto(newPhoto)
  }
  return {
    photo,
    takePhoto,
  };
}