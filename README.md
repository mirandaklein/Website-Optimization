# Front-End Mobile Portfolio

This is a sample website used to implement best practices for website optimization.

## Installation
Clone the github repository: 
```bash
$ git clone https://github.com/mirandaklein/Website-Optimization.git
$ cd Website-Optimization.git
$ open index.html
```
Or visit the website: https://mirandaklein.github.io/Website-Optimization/

## How to Use:
Open the website https://mirandaklein.github.io/Website-Optimization/ in Pagespeed Insights to see the performance of the page for mobile and desktop.

## Optimizations:

### index.html
1. Inline and add media query to CSS
2. Async tag added to JS

### views/js/main.js and pizza.html
The optimzation of views/pizza.html was accomplised by modifying views/js/main.js until the frame rate reached 60 fps or higher. Comments detailing this are in views/js/main.js

### img and views/images
Gulp was used to compress images

#Gulp

##Installation and Usage
1. Download node from https://nodejs.org/en/
2. Install gulp globally with terminal
```sudo npm install --global gulp
```
3. Change to main directory of project in install npm dependencies
```npm install
```
This creates node_modules directory with all the plugins in the root of your project.
4. Create gulpfile.js, call the gulp object, and begin your first task.

## Dependencies
No dependencies required. Tested on Chrome.




