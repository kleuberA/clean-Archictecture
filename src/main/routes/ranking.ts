import { adaptRoute } from "../adapters";
import { makeLastLoadRankingController } from "../factories";

import { Router } from "express";

export default (router: Router): void => {
	router.get("/rankings/last", adaptRoute(makeLastLoadRankingController()));
};
