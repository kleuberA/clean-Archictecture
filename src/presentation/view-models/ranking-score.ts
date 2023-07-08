import { RankingScore } from "../../domain/entities";

export class RankingScoreViewModel {
	player: Player | undefined;
	score: number | undefined;
	matchDate: string | undefined;
	heroes: Hero[] | undefined;

	static map(entity: RankingScore): RankingScoreViewModel {
		return {
			...entity,
			matchDate: entity.matchDate.toISOString(),
		};
	}
	static mapCollection(entities: RankingScore[]): RankingScoreViewModel[] {
		return entities.map((entity) => RankingScoreViewModel.map(entity));
	}
}

type Player = {
	name: string;
	country: string;
};
type Hero = {
	name: string;
	level: number;
};
