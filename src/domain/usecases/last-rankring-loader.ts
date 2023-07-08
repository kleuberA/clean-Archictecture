import { RankingScore } from "./../entities/ranking-score";
export interface LastRankingLoader {
	load: () => Promise<RankingScore[]>;
}
