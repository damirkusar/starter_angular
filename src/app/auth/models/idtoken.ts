export interface IdToken {
  sub: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role?: string[];
}
