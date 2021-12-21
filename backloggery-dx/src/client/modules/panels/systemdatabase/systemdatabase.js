import { LightningElement } from 'lwc';

export default class SystemDatabase extends LightningElement {
    systemMetadata = {
        atari2600: {
            name: "Atari 2600",
            abbreviation: 'a2600',
            manufacturer: "Atari, Inc.",
            releaseDate: "Sep 1977",
            discontinuedDate: "Jan 1, 1992",
            systemImage: null,
            description: null
        },
        pc: {
            name: "PC",
            abbreviation: "PC"
        },
        nintendo64: {
            name: 'Nintendo 64',
            abbreviation: "N64"
        },
        segamastersystem: {
            name: "Sega Master System",
            abbreviation: "SMS"
        }
    };

    totalStats = {
        totalGameCount: null,
        unfinishedCount: null,
        unplayedCount: null,
        unAllCount: null,
        beatenCount: null,
        completedCount: null,
        finishedCount: null,
        nullCount: null,
        masteredCount: null,
        unAllPercentage: null,
        finishedPercentage: null,
        nullPercentage: null
    };

    pc = this.newSystem('PC');
    atari2600 = this.newSystem('Atari 2600');
    nintendo64 = this.newSystem('Nintendo 64');
    segamastersystem = this.newSystem('Sega Master System');
    systems = {pc: this.pc,
                atari2600: this.atari2600,
                nintendo64: this.nintendo64,
                segamastersystem: this.segamastersystem}

    connectedCallback() {
        window.jquery = require('../../../../jquery');
        //Placeholder
        this.pc.totalGameCount = 1;
        this.pc.unfinishedCount = 0;
        this.pc.unplayedCount = 0;
        this.pc.beatenCount = 0;
        this.pc.completedCount = 1;
        this.pc.masteredCount = 1;
        this.pc.nullCount = 0;

        this.atari2600.totalGameCount = 0;
        this.atari2600.unfinishedCount = 0;
        this.atari2600.unplayedCount = 0;
        this.atari2600.beatenCount = 0;
        this.atari2600.completedCount = 0;
        this.atari2600.masteredCount = 0;
        this.atari2600.nullCount = 0;

        this.nintendo64.totalGameCount = 1;
        this.nintendo64.unfinishedCount = 0;
        this.nintendo64.unplayedCount = 0;
        this.nintendo64.beatenCount = 1;
        this.nintendo64.completedCount = 0;
        this.nintendo64.masteredCount = 0;
        this.nintendo64.nullCount = 0;

        this.segamastersystem.totalGameCount = 1;
        this.segamastersystem.unfinishedCount = 1;
        this.segamastersystem.unplayedCount = 0;
        this.segamastersystem.beatenCount = 0;
        this.segamastersystem.completedCount = 0;
        this.segamastersystem.masteredCount = 0;
        this.segamastersystem.nullCount = 0;
        this.recalculateTotalStats();
        console.log(this.totalStats);
        console.log(this.pc.totalGameCount);

    }

    newSystem(systemName) {
        // This will pull all metadata from a local database because this rarely needs to be changed or updated
        return {
            name: systemName,
            abbreviation: null,
            manufacturer: null,
            releaseDate: null,
            discontinuedDate: null,
            systemImage: null,
            description: null,
            totalGameCount: null,
            unplayedCount: null,
            unfinishedCount: null,
            beatenCount: null,
            completedCount: null,
            nullCount: null,
            masteredCount: null,
            gameDatabase: null
        };
    }


    recalculateTotalStats() {
        for (const [systemName, systemInfo] of Object.entries(this.systems))  {
            this.totalStats.totalGameCount += systemInfo.totalGameCount;
            this.totalStats.unfinishedCount += systemInfo.unfinishedCount;
            this.totalStats.unplayedCount += systemInfo.unplayedCount;
            this.totalStats.unAllCount += systemInfo.unplayedCount + systemInfo.unfinishedCount;
            this.totalStats.beatenCount += systemInfo.beatenCount;
            this.totalStats.completedCount += systemInfo.completedCount;
            this.totalStats.finishedCount += systemInfo.beatenCount + systemInfo.completedCount;;
            this.totalStats.nullCount += systemInfo.nullCount;
            this.totalStats.masteredCount += systemInfo.masteredCount;
          }
        this.totalStats.unAllPercentage = this.totalStats.unAllCount / this.totalStats.totalGameCount;
        this.totalStats.finishedPercentage = this.totalStats.finishedCount / this.totalStats.totalGameCount;
        this.totalStats.nullPercentage = this.totalStats.nullCount / this.totalStats.totalGameCount;
        jquery(this.template.querySelector(".unall-progress-bar")).css(
            'width', `${this.totalStats.unAllPercentage}%`
        );
        jquery(this.template.querySelector(".finished-progress-bar")).css(
            'width', `${this.totalStats.finishedPercentage}%`
        );
        jquery(this.template.querySelector(".null-progress-bar")).css(
            'width', `${this.totalStats.nullPercentage}%`
        );
    }

    /* systems = {};
    pc = {};
    n64 = {};
    mastersystem = {};
    bloodlines = null;
        hybrid = null;
        phantasy = null;

    totalStats = {
        totalGameCount: null,
        unfinishedCount: null,
        unplayedCount: null,
        beatenCount: null,
        completedCount: null,
        nullCount: null,
        masteredCount: null,
    };

    connectedCallback() {
        // Debug data for now
        this.pc = this.newSystem('PC');
        this.n64 = this.newSystem('Nintendo 64');
        this.mastersystem = this.newSystem('Sega Master System');
        this.initializeGames();
    }
        
    //Debug functions taken from userinfo, will be moved once database reading is in place
        initializeGames() {
            // Optimally this would be handled in another file, but this will work for now
            // Boxart, developer, publisher, release date, and genre could all optionally pull from the MobyGames API
            this.bloodlines = this.newGame('Vampire the Masquerade - Bloodlines', 'PC');
                this.updateCompletionStatus(this.bloodlines, 'completed');
                this.updateCompletionStatus(this.bloodlines, 'mastered');
                this.appendGameToSystem(this.bloodlines, this.pc);
                //this.bloodlines.name = '日本語テスト';
            this.hybrid = this.newGame('Hybrid Heaven', 'N64');
                this.updateCompletionStatus(this.hybrid, 'beaten');
                this.appendGameToSystem(this.hybrid, this.n64);
            this.phantasy = this.newGame('Phantasy Star', 'SMS');
                this.updateCompletionStatus(this.phantasy, 'unfinished');
                this.appendGameToSystem(this.phantasy, this.sms);
            this.systems = {pc: this.pc, n64: this.n64, mastersystem: this.mastersystem};
            this.recalculateAllSystemStats();
            this.recalculateTotalStats();

    }

    updateCompletionStatus(gameInfo, completionStatus) {
        /* Mastery is an optional flag to denote special completions (score-attacks, speedruns, etc.)
           Unlike the original Backloggery, we don't want it to override normal completion status
           (completing a speedrun doesn't mean you 100%d the game, so it could be 'beaten' and still 'mastered';
           in the current Backloggery, all mastered games are denoted 'completed'.)
           so it has an optional flag here, and we use HTML to override the displayed completion status
           if it is mastered. 
        if(completionStatus == 'mastered') {
            gameInfo.isMastered = true;
        } else {
            gameInfo.completionStatus = `../../../resources/completionstatus/${completionStatus}.png`;
        }
    }


    newGame(gameName, gameSystem) {
        return {
            name: gameName,
            system: gameSystem,
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
        };
    }

    newSystem(systemName) {
        // This will pull all metadata from a local database because this rarely needs to be changed or updated
        return {
            name: systemName,
            abbreviation: null,
            manufacturer: null,
            releaseDate: null,
            discontinuedDate: null,
            systemImage: null,
            description: null,
            totalGameCount: null,
            unplayedCount: null,
            unfinishedCount: null,
            beatenCount: null,
            completedCount: null,
            nullCount: null,
            masteredCount: null,
            gameDatabase: null
        };
    }

    recalculateTotalStats() {
        for (const [systemName, systemInfo] of Object.entries(this.systems)) {
            this.totalStats.totalGameCount += systemInfo.totalGameCount;
            this.totalStats.unfinishedCount += systemInfo.unfinishedCount;
            this.totalStats.unplayedCount += systemInfo.unplayedCount;
            this.totalStats.beatenCount += systemInfo.beatenCount;
            this.totalStats.completedCount += systemInfo.completedCount;
            this.totalStats.nullCount += systemInfo.nullCount;
            this.totalStats.masteredCount += systemInfo.masteredCount;
          }
    }

    recalculateSystemStats(system) {
        for (const [gameName, gameInfo] of Object.entries(system.gameDatabase)) {
            switch(gameInfo.completionStatus) {
                case 'unfinished':
                    system.unplayedCount += 1;
                    break;
            }
          }
    }

    recalculateAllSystemStats() {
        for (const [systemName, systemInfo] of Object.entries(this.systems)) {
            this.recalculateSystemStats(systemName);
        }
    }

    appendGameToSystem(game, system) {
        system.gameDatabase = Object.assign(system.gameDatabase, game);
    }
    */
}