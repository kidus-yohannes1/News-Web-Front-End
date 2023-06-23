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
