import { LoadLastRankingController } from "../../presentation/controllers";
import { LastRankingLoaderService } from "../../data/services";
import { FakeRankingRepository } from "../../infra/repositories";
import { Controller } from "../../presentation/contracts";

export const makeLastLoadRankingController = (): Controller => {
	const repo = new FakeRankingRepository();
	const loader = new LastRankingLoaderService(repo);
	return new LoadLastRankingController(loader);
};
