import { Component } from '@angular/core';

@Component({
  selector: 'app-homep',
  templateUrl: './homep.component.html',
  styleUrls: ['./homep.component.css']
})
export class HomepComponent {
  postText: string = '';
  tweets: any[] = []; 
  likes: any[] = [];
  comments: any[]=[];
  commentText: string='';

  addPost() {
    if (this.postText.trim() !== '') {
      const newTweet = { text: this.postText };
      this.tweets.push(newTweet);
      this.postText = ''; 
    }
  }

  toggleLike(tweet: any) {
    
    const index = this.likes.findIndex((like) => like.tweet === tweet);
    if (index !== -1) {
      this.likes.splice(index, 1); 
    } else {
      this.likes.push({ tweet: tweet }); 
    }
  }

  isLiked(tweet: any): boolean {
    // Проверяем, лайкнут ли пост
    return this.likes.some((like) => like.tweet === tweet);
  }

  likeCount(tweet: any): number {
    return this.likes.filter((like) => like.tweet === tweet).length;
  }
  
  addComment(tweet: any, commentText: string) {
    if (commentText.trim() !== '') {
      const newComment = { tweet: tweet, text: commentText };
      this.comments.push(newComment);
      this.commentText = ''; 
    }
  }

  getComments(tweet: any): any[] {
    return this.comments.filter((comment) => comment.tweet === tweet);
  }
}

