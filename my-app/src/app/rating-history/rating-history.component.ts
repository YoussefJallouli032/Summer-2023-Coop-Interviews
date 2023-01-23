import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-history',
  templateUrl: './rating-history.component.html',
  styleUrls: ['./rating-history.component.css']
})
export class RatingHistoryComponent {
  ratings: { image: string, rating: number }[] = [];
  // Goal 4: Add a section to your app where you can review the history of your dog ratings with both the picture and rating.
  addRating(image: string, rating: number) {
    this.ratings.push({ image, rating });
  }

  // Goal 5: Add sorting to your ratings history by highest rated and lowest rated.
  sortRatings(ascending: boolean) {
    this.ratings.sort((a, b) => {
      return ascending ? a.rating - b.rating : b.rating - a.rating;
    });
  }

}
