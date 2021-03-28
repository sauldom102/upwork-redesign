export default interface User {
  id: string;
  username: string;
  fullName: string;
  phone?: string;
  photo: string;
  joinedAt: Date;
}
