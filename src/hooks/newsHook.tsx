export interface News {
  id: number;
  title: string;
  titleDescription: string;
  newsDescription: string;
  author: string;
  tag: string;
  hashTag: string;
  picture: string;
  CreatedAt: string;
  categoryId: number;
  userId: number;
}

export interface IHome {
  message: string;
  Banner: News[];
  Recent: News[];
  TopStories: News[];
  TreandingNews: News[];
}
export interface Category {
  id: number;
  name: String;
  news: News[];
}
export interface postRequest {
  method: "POST";
  headers: Headers;
  body: URLSearchParams;
  redirect: "follow";
}
export interface IUser {
  id: number;
  name: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  token: any;
  CreatedAt: string;
}
