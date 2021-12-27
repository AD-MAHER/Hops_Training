import React from 'react'
import actionType from './actionType'

export default function setLanguage(lang) {
  Helper.updateDeviceLanguageToStorage(lang)
  return{
      type : actionType.ui.setLanguage,
     payload : lang
  }
}

export default function showCamera(lang) {
    return{
        type : actionType.ui.showCamera,
       payload : show
    }
  }

  export default function showProfilePhoto(lang) {
  
    return{
        type : actionType.ui.showProfilePhoto,
       payload : photo
    }
  }