
import { EventEmitter } from '@angular/core';

export class VoteComponent {
  totalVotes = 0;
  voteChanged = new EventEmitter();

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}

// Often we'll use an EventEmitter as an
// Output() property
// But won't worry about it here cos we're not using templates

