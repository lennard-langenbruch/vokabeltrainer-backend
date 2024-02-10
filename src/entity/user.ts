export class User {
    id: number;
    username: string;
    streak: number;
    created: Date;
    deleted: boolean;
  
    constructor(id: number, username: string, streak: number, created: Date, deleted: boolean) {
      this.id = id;
      this.username = username;
      this.streak = streak;
      this.created = created;
      this.deleted = deleted;
    }
  }