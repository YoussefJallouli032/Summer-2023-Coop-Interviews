import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RatingHistoryComponent } from './rating-history/rating-history.component';
@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent {
// Goal 1: Fetch a random dog image from the API and display it on the page.
  dogImageUrl: string;
  rating: number;
  selectedBreed: string;

  constructor(private http: HttpClient) {
    this.fetchRandomDogImage();
    this.fetchBreeds();
  }
// Goal 1: Fetch a random dog image from the API and display it on the page.
  fetchRandomDogImage() {
    this.http.get('https://dog.ceo/api/breeds/image/random')
      .subscribe(data => {
        this.dogImageUrl = data.message;
      });
  }
  // Goal 2: Add a form element that lets users submit their rating, along with a submit button 
  submitRating() {
    console.log(this.rating);
  }
  // Goal 3: Once a rating has been submitted, load a new dog image and reset your form elements.
  // Goal 4:Add a section to your app where you can review the history of your dog ratings with both the picture and rating.
  submitRating() {
    console.log(this.rating);
    this.ratingHistory.addRating(this.dogImageUrl, this.rating);
    this.fetchRandomDogImage();
    this.rating = null;
  }
  // Goal 6: Add an option to filter the random dogs being provided by breed, using the list of dog breeds in the provided file.
  fetchRandomDogImageByBreed() {
    if (this.selectedBreed) {
      this.http.get<{ message: string }>(`https://dog.ceo/api/breed/${this.selectedBreed}/images/random`)
        .subscribe(data => {
          this.dogImageUrl = data.message;
        });
    } else {
      this.fetchRandomDogImage();
    }
  }

  fetchBreeds() {
    this.http.get<string[]>('https://dog.ceo/api/breeds/list/all.subscribe(data => {
      this.breeds = data.message;
    });
  }

  onRatingSubmit() {
    // Add the current image and rating to the rating history component
    RatingHistoryComponent.addRating({
      image: this.dogImageUrl,
      rating: this.rating
    });
    this.rating = null;
    // Fetch a new random image
    this.fetchRandomDogImageByBreed();
  }

}
