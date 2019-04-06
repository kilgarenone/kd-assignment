# Multi-step Form

This project accepts questions, steps through the questions one at a time, and finally display the result.

It's able to construct complex form validation requirement, and although currently it only supports 'text' and 'select' questions, other types of question should share the similar pattern in code easily.

## Demo

https://upbeat-hypatia-60c204.netlify.com/

## UI component library

Adapted a bunch from my previous side-project that did a similar multi-step form feature.
https://github.com/kilgarenone/towernest/tree/master/src/components

## Third-party library

**[Formik](https://github.com/jaredpalmer/formik)**
Has a helpful multi-step form example as a starting point.
https://github.com/jaredpalmer/formik/blob/master/examples/MultistepWizard.js

**[Yup](https://github.com/jquense/yup)**
Used to construct form validation schema.

## Build

The build setup that uses Webpack is adapted from my other side-project(private repo).

Here is the main `webpack.config.js` file:
https://github.com/kilgarenone/kd-assignment/blob/master/webpack.config.js

Here is the configuration broken into `dev` and `prod` mode:
https://github.com/kilgarenone/kd-assignment/tree/master/config/webpack
