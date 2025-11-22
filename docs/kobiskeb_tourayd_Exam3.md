| Course: 3870 – Secure Web Development
| Activity: Exam 3
| Name: Ben Kobiske [kobiskeb@uwplatt.edu], David Touray [tourayd@uwplatt.edu]
| Professor: Dr. Abraham Aldaco
| Date: 2025-11-22

## AI/ML Usage

### Prompt 1: Implementing Error Handling for Camera Permissions

Prompt Used:
"How do I handle camera permission denials in React Native without crashing the app?"

Explanation:
The AI helped identify that we needed to check the permission state before attempting to use the camera. It suggested:
1. A loading state while permissions are being checked
2. A user-friendly UI when permissions are denied
3. A button to request permissions again if initially denied
4. Proper use of React Native components (ActivityIndicator, TouchableOpacity) for better UX

This prevented crashes and improved the user experience by providing clear feedback about permission status.

![Prompt 1](./aiprompt1.png){width=50%}

### Prompt 2: Optimizing Frame Processing Performance in Object Tracking

Prompt Used:
"How do I make my frame processor faster? It's lagging when processing camera frames for object tracking."

Explanation:
The AI suggested implementing subsampling to reduce computational load:
1. Worklet Optimization: Ensured all functions are marked with `'worklet'` directive to run on the UI thread for better performance
2. Maintained Accuracy: The subsampling approach still detects objects accurately because we're looking for color patterns that span multiple pixels
3. Edge Case Handling: Added bounds checking to prevent array index errors when sampling near image boundaries

![Prompt 2](./aiprompt2.png){width=50%}

## Main Page

The main screen shows our group details and links controlled via Expo Routing. These links can be navigated to via a click. The information is displayed in a flex layout, providing functionality across multiple device screen sizes.

![](./main.png){width=50%}

## Screen 1 - Photo Capture & Storage

The photo capture sceen shows a photo preview, showing what your camera sees. Once you press the take photo button (it's a white circle near the bottom of the sceen), you can see the photo taken and decide whether to keep or retake the photo. You can also browse your photo gallery on a seperate screen, showcased in our video.

![](./photocapture.png){width=50%}/
![](./photodisplay.png){width=50%}

## Screen 2 - Object / Color Tracking

This screen allows you to detect an object. This is currently tuned to detect a bright green silicon ice cube tray, showcased in the video. When the tray is detected, the top of page text reflects the detection.

![](./tracking.png){width=50%}
