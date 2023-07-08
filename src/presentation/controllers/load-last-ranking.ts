import { LastRankingLoader } from "./../../domain/usecases/last-rankring-loader";
import { Controller, HttpResponse, ok, serverError } from "../contracts";
import { RankingScoreViewModel } from "../view-models";

export class LoadLastRankingController implements Controller {
	constructor(private readonly LastRankingLoader: LastRankingLoader) {}

	async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
		try {
			const ranking = await this.LastRankingLoader.load();
			return ok(RankingScoreViewModel.mapCollection(ranking));
		} catch (error: any) {
			return serverError(error);
		}
	}
}
