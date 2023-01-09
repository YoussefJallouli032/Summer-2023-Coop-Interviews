<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AES-Outreach/Winter-2023-Coop-Interviews">
    <img src="outstem_logo_icon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">OutStem Winter 2023 Coding Challenge</h3>

  <p align="center">
    Welcome to the OutStem coding interview.
  </p>
</p>

# OutStem Front-end Challenge

Welcome to the OutStem front-end challenge. Submission instructions are listed below. The deadline to submit this challenge is **Monday September 26th, 9:00 AM**. We would like to emphasize that we are looking for effort, and that the challenge is just part of our discussion with you during the interview, so don’t worry if your solution is *hacky* or even if it doesn’t work, we want to see it!

## The Challenge

The challenge is to build a Pokédex application that wraps the existing [pokeapi](https://pokeapi.co/). The design and layout of the website is totally up to you, though you will be judged on the look, feel, and usability of your application, so do your best to respect best practices in web design.

For those unfamiliar, a Pokédex is an device (though in this case we only ask you to build a web UI) that allows you to search for Pokémon. For more information see [here](https://pokemon.fandom.com/wiki/Pok%C3%A9dex).

## Goals

*The styling for this challenge is up to you, feel free to use any UI libraries*

This challenge has multiple goals that increase in level of difficulty, implement as many of these goals as you are able to.

### Goal 1

Create a search box that the user can input the **exact name** of a Pokémon and the app will display the name and image of the matching Pokémon. The "search" box here only needs to support exact matches.

Use the main `pokemon` endpoint of the pokeapi for this. See their website and documentation for exact details.

### Goal 2

Implement a basic client side cache so that when the user looks up the same Pokémon twice your application doesn't need to use the pokeapi again to get the result.

### Goal 3

Use the pokeapi list endpoint to get a list of names of all Pokémon and their corresponding URL. Use your caching strategy for the results of this endpoint as well (this is important and required by the pokeapi terms of use).

List endpoint: https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0

### Goal 4

Add client side search by name (this time proper search with partial matching) to the results from the list endpoint. For example if the user searches for "Char" we would expect to get back "Charizard" and "Charmander" (as well as others potentially).

Complex machine learning based matching is not required here but we welcome the best matching algorithm you can come up with.

### Goal 5

Reuse your matching logic to setup a typeahead on the search box.

For those unfamiliar with the term, a typeahead is a feature added to a text input to preview suggestions based on the content already typed out, and allow the user to select one from a dropdown. Much like the suggestion dropdown when typing out a Google search.

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
- Testing: is the system adequately tested?
- Best Practices: does your solution use Javascript/TypeScript's and your chosen framework's best practices
- User Friendly UI: does your solution anticipate what users might need to do and have elements that are easy to access?

## Submission

Please submit your solution in the 2023 Winter interview GitHub repository via GitHub Issue.

1. Navigate to the following link (https://github.com/AES-Outreach/Winter-2023-Coop-Interviews/issues/new/choose) or:
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

