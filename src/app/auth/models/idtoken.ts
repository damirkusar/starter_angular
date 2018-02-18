export interface IIDToken {
  sub: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roles?: string[];
}
