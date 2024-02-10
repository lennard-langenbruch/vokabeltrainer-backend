export class Word {
    id: number;
    german: string;
    english: string;
    topic: string;
  
    constructor(id: number, german: string, english: string, topic: string) {
      this.id = id;
      this.german = german;
      this.english = english;
      this.topic = topic;
    }
  }