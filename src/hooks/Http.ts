import axios from "axios";
import { IAuth, IHome, IRecent, ISearch, News } from "./newsHook";
export async function getHomePage(): Promise<IHome> {
    const url = "http://localhost:4000/api/news/home";
    const response = await axios.get<IHome>(url);
    return response.data;
  }

export async function allRecent(): Promise<IRecent> {
  const url = "http://localhost:4000/api/recentnews/";
  const response = await axios.get<IRecent>(url);
  return response.data;
}
export async function auth(props:string): Promise<IAuth> {

      var headers: any = {
        Authorization: props,
       
      };
  const url = "http://localhost:4000/users/auth/";
  const response = await axios.get<IAuth>(url,headers
 );  
  return response.data;
}
export async function search(props:string): Promise<ISearch> {
  const url = `http://localhost:4000/api/search/${props}`;
  const response = await axios.get<ISearch>(url);
  return response.data;
}