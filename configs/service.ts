import { BaseEnvironment } from "./BaseEnvironment";
import axios from "axios";

const env = new BaseEnvironment();

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export const getYoutubeVideos = async (query: string) => {
  const param = {
    part: "snippet",
    q: query,
    maxResults: 1,
    type: "video",
    key: env.YOUTUBE_API_KEY,
  };

  const response = await axios.get(YOUTUBE_BASE_URL, { params: param });
  return response.data.items;
};
