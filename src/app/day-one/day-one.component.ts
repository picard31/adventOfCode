import { Component, OnInit } from '@angular/core';
import { dayOneInput } from './day-one.mock';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
})
export class DayOneComponent implements OnInit {
  gapAccum = 0;
  similarityAccum = 0;

  ngOnInit(): void {
    this.gapAccum = 0;
    this.similarityAccum = 0;

    const firstList = dayOneInput.filter((_input, index) => index % 2 === 0);
    const secondList = dayOneInput.filter((_input, index) => index % 2 !== 0);

    firstList.sort();
    secondList.sort();

    /* Part one */
    if (firstList.length === secondList.length) {
      for (let index = 0; index < firstList.length; index++) {
        const firstItem = firstList[index];
        const secondItem = secondList[index];
        this.gapAccum += Math.abs(firstItem - secondItem);
      }
    }

    /* Part two */
    let secondIndex = 0;
    for (let firstIndex = 0; firstIndex < firstList.length; firstIndex++) {
      const firstItem = firstList[firstIndex];

      while (
        secondIndex < secondList.length &&
        secondList[secondIndex] <= firstItem
      ) {
        if (secondList[secondIndex] === firstItem) {
          this.similarityAccum += firstItem;
        }
        secondIndex++;
      }
    }
  }
}
