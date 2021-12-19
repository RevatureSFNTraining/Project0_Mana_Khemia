import { LightningElement } from 'lwc';

export default class GameInfo extends LightningElement {
    gameMetadata = {
        game: {
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
            review: null,
            region: null,
            inCompilation: null, //used for DLC entries or compilation
            emulatedOn: null //used for emulated rereleases (WiiVC)
        }
    };
}