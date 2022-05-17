<h1 align="center">Comrad</h1>
<div align="center">A mobile app for the Comrad platform. Built with React Native.</div>

## Overview

Comrad is designed for public speaking engagements, and allows for speakers and listeners to directly communicate with eachother.

## Features 

- Speakers can create rooms for listeners to join
- Users can join rooms via room codes

(the following have yet to be implemented)

- Listeners can listen to a speaker directly from their phone.
- If permitted, listeners can use their device as a microphone for the room to hear
- Listeners can submit questions in text format to the speaker
- Speakers can emit questions/polls to their room and view results
- Speakers can specify which users are permitted to join their room

## Installation

This app is not yet available on any app store, 
and is therefore dependent on iOS simulation via XCode. Install XCode through the app store [here](https://apps.apple.com/us/app/xcode/id497799835?mt=12).

In addition, this project is dependent on yarn
```zsh
sudo apt install yarn       # debian
sudo pacman -S yarn         # arch
brew install yarn           # macOS ([homebrew](https://brew.sh))
# windows can use npm to install it
```

After system dependencies have been installed, run ```yarn setup``` to install app dependencies,
then ```yarn ios``` to begin the simulation.

## Project structure

* ```src```: Contains the JavaScript + React Native front-end for the Comrad app.
  * ```src/components```: Contains components used throughout the app.
  * ```src/navigation/home/HomeStackNavigator.js```: The main component that gets registered by ```App.js```, and is used for route navigation.
  * ```src/redux```: Contains actions, reducers, and constants necessary for maintaining global state.
  * ```src/res```: Contains files necessary for supporting multiple languages (WIP).
  * ```src/screens```: Contains screen (or, 'page') components.

---

* ```ios```: Contains the basic skeleton for a React Native iOS app.
  * ```ios/PodFile```: Adds necessary Google/Firebase libraries

---

* ```android```: Contains the basic skeleton for a React Native Android app.


## Credits
