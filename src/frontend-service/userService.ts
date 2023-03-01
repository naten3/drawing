import { randomUUID } from "crypto";

const USER_ID_KEY = "USER_ID";
const SECRET_KEY = "SECRET";

export class UserService {
  public readonly userId: string;
  constructor() {
    let userId = localStorage.getItem(USER_ID_KEY);
    let secret = localStorage.getItem(SECRET_KEY);
    if(!userId) {
      userId = randomUUID()
      localStorage.setItem(USER_ID_KEY, userId);
    }

    this.userId = userId as string;
  }
}
