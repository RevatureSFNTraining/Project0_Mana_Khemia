export default class GameInfo {
        /* metadata =  {
            name: null,
            system: null,
            developer: null,
            publisher: null,
            releaseDate: null,
            boxart: null,
            genre: null,
            estimatedCompletionTime: null,
            playTime: null,
            startDate: null,
            finishDate: null,
            completionStatus: null,
            isMastered: null,
            completionNote: null,
			isNowPlaying: null,
            review: null,
            region: null,
            inCompilation: null, //used for DLC entries or compilation
            emulatedOn: null //used for emulated rereleases (WiiVC)
        }; */
    
    addInfo(gameInfo, infoType, infoValue) {
        return Object.assign(gameInfo, {infoType: infoValue});
    }

    newGame(gameName, gameSystem) {
        return {'name': gameName,
                'system': gameSystem};
    }
}