<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AES-Outreach/Summer-2023-Coop-Interviews">
    <img src="outstem_logo_icon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">OutStem Summer 2023 Coding Challenge</h3>

  <p align="center">
    Welcome to the OutStem coding interview.
  </p>
</p>

# OutStem Front-end Challenge

Welcome to the OutStem front-end challenge. Submission instructions are listed below. The deadline to submit this challenge is **Monday January 23rd, 9:00 AM**. We would like to emphasize that we are looking for effort, and that the challenge is just part of our discussion with you during the interview, so don’t worry if your solution is *hacky* or even if it doesn’t work, we want to see it!

## The Challenge

The challenge is to build a "Rate My Dog" application that wraps the existing [Dog API](https://dog.ceo/dog-api/). This is meant to be a fun app where users can rate dogs from 10/10 to 15/10 (as dogs are amazing), inspired by the [WeRateDogs](https://twitter.com/dog_rates) twitter account.

The design and layout of the website is totally up to you, though you will be judged on the look, feel, and usability of your application, so do your best to respect best practices in web design.




## Goals

*The styling for this challenge is up to you, feel free to use any UI libraries*

This challenge has multiple goals that increase in level of difficulty, implement as many of these goals as you are able to.

### Goal 1
Fetch a random dog image from the API and display it on the page.

Use the [random](https://dog.ceo/dog-api/documentation/random) endpoint of the API for this.

`https://dog.ceo/api/breeds/image/random`

### Goal 2

Add a form element that lets users submit their rating, along with a submit button. This can be as simple as a text field, and as complex as a star rating input element.

### Goal 3

Once a rating has been submitted, load a new dog image and reset your form elements.

### Goal 4

Add a section to your app where you can review the history of your dog ratings with both the picture and rating.

Note: this does not require a database, you can use a simple client side cache that only needs to persist until the page is refreshed.

### Goal 5

Add sorting to your ratings history by highest rated and lowest rated.

### Goal 6

Add an option to filter the random dogs being provided by breed, using the list of dog breeds in the [provided file](dog-breeds.txt).

Use the [random by breed](https://dog.ceo/dog-api/documentation/breed) endpoint of the API for this.

`https://dog.ceo/api/breed/${BREED_HERE}/images/random`

## Your solution

Here are the requirements for your solution.

1. You can complete this challenge using any front end framework of your choice, however, we prefer to see you do this challenge in JavaScript/TypeScript and Angular.
2. Your solution submission should indicate which goals you've achieved
4. You must submit your solution in a GitHub repository or a Repl.it. **Please make sure your project/repository is public and accessible by us.**

## Evaluation 

You will be evaluated on:
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Best Practices: does your solution use Javascript/TypeScript's and your chosen framework's best practices
- User Friendly UI: does your solution anticipate what users might need to do and have elements that are easy to access?

## Submission

Please submit your solution in the 2023 Summer interview GitHub repository via GitHub Issue.

1. Navigate to the following link (https://github.com/AES-Outreach/Summer-2023-Coop-Interviews/issues/new/choose) or:
   1. Navigate to the challenge repository
   2. Click **Issues**
   3. Click **New Issue**
2. Click **Get Started** for Solution Submission
3. Change `YOUR_NAME` to your full name in the title field
4. Fill out the form
5. Click **Submit New Issue**
6. Done! Thank you for completing the challenge, we look forward to discussing your solution with you during the interview. 🎉

If you have any questions, you can email Ivana Erlich at ierlich@uottawa.ca


## Bonus Challenges

- Make your UI responsive, that is usable on all screen sizes
- Implement any other features provided by the API

