# Project Documentation

`Amega Test Case`

## Table of Contents

1. [Project Structure](#project-structure)
   - [Assets](#assets)
   - [Components](#components)
   - [Constants](#constants)
   - [Hooks](#hooks)
   - [Navigations](#navigations)
   - [Screens](#screens)
   - [Themes](#themes)
   - [Types](#types)
2. [Setup and Installation](#setup-and-installation)
3. [Launching the Project](#launching-the-project)
   - [Android](#android)

## Project Structure

The project is organized into several directories, each serving a specific purpose. Below is an overview of each directory and its role in the project.

### Assets

The `assets` directory contains all the static assets such as images, fonts, and other resources used in the application.

### Components

The `components` directory includes reusable UI components that are used across the application. Each component should have its own folder containing the component file, styles, and any associated tests.

### Constants

The `constants` directory holds constant values and configurations that are used throughout the application, such as API endpoints, action types, or static data.

### Hooks

The `hooks` directory contains custom React hooks that encapsulate reusable logic. These hooks can be used to manage state, side effects, or any reusable logic that needs to be shared across components.

### Navigations

The `navigations` directory manages the navigation structure of the application. It typically includes the navigation stack, tab navigators, and any navigation-related configurations.

### Screens

The `screens` directory includes all the different screens (or pages) of the application. Each screen typically corresponds to a different view or route in the application.

### Themes

The `themes` directory contains the styling and theming configurations for the application. This can include color schemes, typography, and other design-related settings.

### Types

The `types` directory holds TypeScript type definitions and interfaces used throughout the application. This helps in maintaining type safety and improving code quality.

## Setup and Installation

Provide detailed instructions on how to set up and install the project. Include prerequisites, installation steps, and any other necessary configurations.

```sh
# Clone the repository
git clone <https://github.com/nassimmiled/amega>

# Navigate to the project directory
cd <amega>

# Install dependencies
yarn install

# Start the application
yarn start
```

## Launching the Project

### Android

To launch the project on an Android device or emulator, follow these steps:

1. **Install Android Studio**: Download and install [Android Studio](https://developer.android.com/studio) and make sure you have the latest Android SDK and emulator installed.

2. **Install Java Development Kit (JDK)**:

   - Ensure that you have the correct version of the JDK installed. React Native typically requires JDK 8 or JDK 11.
   - You can download it from [Oracle's website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) or use a package manager like `brew` on macOS:
     ```sh
     brew install openjdk@11
     ```
   - After installation, set the `JAVA_HOME` environment variable to the JDK path. Add the following lines to your `~/.bash_profile`, `~/.zprofile`, or `~/.bashrc` file (macOS/Linux):
     ```sh
     export JAVA_HOME=$(/usr/libexec/java_home -v 11)
     export PATH=$JAVA_HOME/bin:$PATH
     ```

3. **Set Up Your Android Environment Variables**:

   - **MacOS/Linux**: Add the following lines to your `~/.bash_profile`, `~/.zprofile`, or `~/.bashrc` file:
     ```sh
     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/tools
     export PATH=$PATH:$ANDROID_HOME/tools/bin
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     ```

4. **Start the Android Emulator**:

   - Open Android Studio.
   - Go to `AVD Manager` (found in the toolbar or under `Tools` > `AVD Manager`).
   - Create and start a virtual device.

5. **Run the Project**:

   - Open a terminal in your project directory.
   - Make sure you have the Android emulator running or an Android device connected.
   - Run the following command to start the app on Android:

     ```yarn run android

     ```

This will build the application and install it on the connected Android device or emulator.
