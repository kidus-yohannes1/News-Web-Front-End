import axios from "axios";
import { IHome, News } from "./newsHook";
export default async function getHomePage(): Promise<IHome> {
    const url = "http://localhost:4000/api/news/home";
    const response = await axios.get<IHome>(url);
    return response.data;
  }