# Frontend Mentor - Intro component with sign up form solution

This is my solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects...

## Table of contents

- [My Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

#### Mobile

![](/src/images/mb.png)

#### Desktop

![](/src/images/dt.png)

### Links

- Solution URL: [solution URL](https://github.com/roodhouse/frontend-mentor-intro)
- Live Site URL: [live site URL](https://intro.rugh.us)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

The first useful thing I learned was the ability to place a background image and background color on the same element. Previously I had been creating extra divs, moving them around and adjusting opacity. But the below code works just fine:

```js
<div id='wrapper' className='h-full bg-[url("./images/bg-intro-mobile.png")] bg-orange pt-[88px] px-6 pb-[68px] xl:px-0 xl:py-[121px] xl:flex xl:flex-col xl:flex-wrap xl:items-center'>
```

I spent a lot of time trying to better understand React Hook Form during this project. I ran up against the default browser vaildation widget again. Previously I could work around it but with so many fields in this project the work around was not the best route. Finally I gave up and googled "chrome validation widget prevents react hook form from working on email fields". That search term was a winner and brought me to [this page](https://github.com/react-hook-form/react-hook-form/issues/1367) with the solution. It is very simple and I am happy to be done with this issue forever. Here is a SS of the error from the browser:

![](/src/images/chromeError.png)

Here is the simple code that fixes it and allows the code from React Hook Form to do its job:

```js
<form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
  ```

The last thing I learned was how to change the text color dynamically. Set the original text color and change the text color when an error it triggered. Simple enough. But how to change the text color back to the original color when the user begins to change the input? Listener waiting for the input event was the key here:

```js
function onError(e) {  
    // When an error occurs then for each error find the warning div for that field and display it
    for (const error in e) {
      let errorText = document.getElementById(error);
      console.log(errorText.value)
      errorText.style.color = '#FF7979'
      let errorElement = document.getElementById(error).parentElement.nextSibling
      errorElement.style.display = 'block'
      // Listen for when the user begins to fix the input and change the color of the text back to black
      errorText.addEventListener('input', function(){
        console.log('change')
        errorText.style.color ='#3D3B48'
      })
    }
  }
```

### Useful resources

- [React Hook Form help for default browser vaildation widget blocking code](https://github.com/react-hook-form/react-hook-form/issues/1367)

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)