import { Genre } from "./Genre";
import { Platform } from "./Platform";
import Publisher from "./Publisher";

export interface Game {
  id: number;
  genres: Genre[];
  name: string;
  slug: string;
  publishers: Publisher[]
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}
