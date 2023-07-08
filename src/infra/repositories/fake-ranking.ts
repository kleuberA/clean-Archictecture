import { RankingScoreModel } from "../../data/models";
import { ranking } from "../data-sources";
import { LoadLastRankingRepository } from "./../../data/contracts/LoadLastRankingRepository";

export class FakeRankingRepository implements LoadLastRankingRepository {
	async loadLastRanking(): Promise<RankingScoreModel[]> {
		return ranking.map((item) => ({
			player: item.user,
			score: item.score,
			matchDate: new Date(item.date),
			heroes: item.heroes,
		}));
	}
}
