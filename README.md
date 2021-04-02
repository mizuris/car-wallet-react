# Introduction to CarWallet

This app is an outcome of learning react. It's main idea is to create your own garage of your owned or your favourites vehicles.
Check [Live version](https://mizuris.github.io/car-wallet-react)

## Technologies

CarWallet was created with usage of:
- React
- React Context
- React-scroll
- Bootstrap
- SCSS
- Firebase
- Github

## Possibilities

Project is using react-router to switch between one of three pages. You can:
1. Add your own vehicle:
 - brand, model, year etc.
 - fuel consumption details,
 - upload photo!
2. Expand your list of vehicles as much as you like.
3. Check / compare your collection.
4. Edit or delete vehicle.

## Form

Form present in the app was created without using any third party form validators. I created own rules, which catch errors. If your input is invalid, you'll get a warrning in form of Error modal.

## Photo upload

I decided to use [Firebase](https://firebase.google.com/) as storage. User can first pick photo, then upload it to database. Url is called when vehicle is displayed on the list.
