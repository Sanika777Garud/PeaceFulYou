# PeacefulYou - Stress Management Portal

## Table of Contents
1. [Overview](#overview)
2. [Objectives](#objectives)
3. [Tech Stack](#tech-stack)
4. [Methodology](#methodology)
   - [1. Preprocessing: Image Processing](#1-preprocessing-image-processing)
   - [2. Face Detection](#2-face-detection)
   - [3. Emotion Detection](#3-emotion-detection)
5. [Features](#features)
6. [Setup and Installation](#setup-and-installation)
7. [Usage](#usage)
8. [Directory Structure](#directory-structure)
9. [Contributing](#contributing)
10. [Acknowledgments](#acknowledgments)

## Overview
PeacefulYou is a user-friendly website designed to help users manage stress by detecting their emotional state through facial expression analysis and providing personalized recommendations for stress-relief exercises, music, and podcasts. The platform also includes features like positive thought pop-ups to uplift users' moods in real-time.

## Objectives
1. **Intuitive Stress Management Platform**: Provide a seamless and accessible platform for users to manage their emotional well-being.
2. **Real-Time Emotion Assessment**: Implement real-time emotion detection algorithms to analyze facial expressions and assess users' emotional states instantaneously.
3. **Personalized Well-Being Recommendations**: Offer personalized recommendations for stress-relief exercises, music, and podcasts, along with real-time positive thought pop-ups.

## Tech Stack
- **Front-end**: HTML, CSS, JavaScript
- **Back-end**: Python, Flask
- **Machine Learning**: Emotion detection using Convolutional Neural Networks (CNN)
- **Dataset**: Kaggle
- **Web Services**: Various web services for data handling and API integration

## Methodology
### 1. Preprocessing: Image Processing
- Use image processing techniques to prepare the images for emotion detection.
- Normalize, resize, and enhance images to ensure consistent and accurate emotion detection.

### 2. Face Detection
- **Algorithm**: Haar Cascade Classifier
  - `cv2.CascadeClassifier`: Used for face detection.
  - `cv2.data.haarcascades`: Pre-trained Haar cascades for face detection.

### 3. Emotion Detection
- **Algorithm**: Convolutional Neural Network (CNN)
  - Implement a CNN model to detect emotions from facial expressions.
  - Train the model on a labeled dataset from Kaggle.

## Features
1. **Real-Time Emotion Detection**: Detect users' emotions in real-time using their webcam.
2. **Personalized Recommendations**:
   - Suggest stress-relief exercises.
   - Recommend soothing music and engaging podcasts.
3. **Positive Thought Pop-Ups**: Display positive and uplifting thoughts based on the detected emotional state.

## Setup and Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/PeacefulYou-Portal.git
   cd PeacefulYou-Portal/peacefulYou
   ```

2. **Install Dependencies**
   ```sh
   pip install -r requirements.txt
   ```

3. **Run the Application**
   ```sh
   python manage.py runserver
   ```

4. **Access the Website**
   Open your browser and go to `http://127.0.0.1:5000/`.

## Usage
1. **Login/Register**: Create an account or log in to access the platform.
2. **Real-Time Emotion Detection**: Allow webcam access for real-time emotion detection.
3. **Receive Recommendations**: Get personalized recommendations based on your detected emotional state.
4. **Enjoy Stress-Relief Content**: Engage with the recommended exercises, music, and podcasts.

## Directory Structure
```
PeacefulYou-Portal/
│
├── README.md
├── peacefulYou/
│   ├── accounts/
│   │   └── ...  # Account related files and folders
│   ├── calc/
│   │   └── ...  # Calculation logic files and folders
│   ├── peacefulYou/
│   │   └── ...  # Main application files and folders
│   ├── static/
│   │   └── ...  # Static files (CSS, JS, images)
│   ├── templates/
│   │   ├── account.html
│   │   ├── exercise.html
│   │   ├── help.html
│   │   ├── index2.html
│   │   ├── music1.html
│   │   ├── PeacefulYouPortal.jpg
│   │   └── profile.html
│   ├── db.sqlite3
│   ├── Emotion_Detection.h5
│   ├── haar_face.xml
│   ├── manage.py
│   ├── model.h5
│   ├── procfile
│   └── requirements.txt
```

## Contributing
We welcome contributions to improve the platform! Please fork the repository and submit a pull request with your changes.

## Acknowledgments
- Thanks to the contributors of the Kaggle dataset used for training the emotion detection model.
- A special mention to the developers of OpenCV for providing the tools necessary for image processing and face detection.
