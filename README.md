# app.json
{
  "expo": {
    "name": "VssIDApp",
    "slug": "appapk",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/src_images_new_logo01.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/images_splash_loading.png",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/efd029bd-03e5-41fe-982f-4a69790faa05"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "bundleIdentifier": "com.noblutwo.vssidapp",
      "buildNumber": "1.0.0"
    },
    "android": {
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#fff"
      },
      "package": "com.noblutwo.appapk"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/src_images_new_logo01.png"
    },
    "plugins": [
      "expo-router",
      "expo-asset",
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Cho phép VssID truy cập vào thông tin vị trí của thiết bị này?"
        }
      ],
      "expo-font"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "efd029bd-03e5-41fe-982f-4a69790faa05"
      }
    },
    "owner": "noblutwo",
    "runtimeVersion": {
      "policy": "sdkVersion"
    }
  }
  
}

# eas.json
{
  "cli": {
    "version": ">= 10.2.2"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "gradleCommand": ":app:assembleDebug"
      },
      "ios": {
        "buildConfiguration": "Debug"
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk",
        "gradleCommand": ":app:assembleRelease"
      },
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "autoIncrement": true,
      "android": {
        "buildType": "app-bundle"
      },
      "ios": {
        "buildConfiguration": "Release"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
