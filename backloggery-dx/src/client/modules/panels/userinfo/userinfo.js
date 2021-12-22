import { LightningElement } from 'lwc';

export default class UserInfo extends LightningElement {
    // This will pull from an external file later
    userInfo = {
        "name" : "ZHamid",
        "avatar": "../../../resources/avatar.png",
        "email" : "hamidzain@outlook.com",
        "dateJoined" : "Feb 1, 2015",
        "pronouns": "They/Them",
        "region": "USA",
        "description": "Hi, I made this prototype Backloggery DX. It's not much for now, but it's something!",
        "socialMedia" : {
            "steamCommunityId": "zhamid",
            "twitterName": "zhamid",
            "twitchName": "zhamid",
            "youtubeChannelId": "imadeupabunchoflettersforthis"
        }
    };
    steamCommunityLink = null;
    twitterLink = null;
    twitchLink = null;
    youtubeChannelLink = null;
    nowPlaying1 = null;
    nowPlaying2 = null;
    nowPlaying3 = null;
    expandedNP1Showing = false;
    expandedNP2Showing = false;
    expandedNP3Showing = false;




    connectedCallback() {
        window.jquery = require('../../../../jquery');
        //localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if(this.userInfo.socialMedia.steamCommunityId !== "null") {
            this.steamCommunityLink = `https://steamcommunity.com/id/${this.userInfo.socialMedia.steamCommunityId}`;
        }
        if(this.userInfo.socialMedia.twitterName !== "null") {
            this.twitterLink = `https://twitter.com/${this.userInfo.socialMedia.twitterName}`;
        }
        if(this.userInfo.socialMedia.twitchName !== "null") {
            this.twitchLink = `https://twitch.tv/${this.userInfo.socialMedia.twitchName}`;
        }
        if(this.userInfo.socialMedia.youtubeChannelId !== "null") {
            this.youtubeChannelLink = `https://youtube.com/channel/${this.userInfo.socialMedia.youtubeChannelId}`;
        }
        this.initializeGames();
    }


    initializeGames() {
        // Optimally this would be handled in another file, but this will work for now
        // Boxart, developer, publisher, release date, and genre could all optionally pull from the MobyGames API
        this.nowPlaying1 = this.newGame('Vampire the Masquerade - Bloodlines', 'Steam');
            this.updateCompletionStatus(this.nowPlaying1, 'completed');
            this.updateCompletionStatus(this.nowPlaying1, 'mastered');
            this.nowPlaying1.boxart = 'https://www.mobygames.com/images/covers/l/67710-vampire-the-masquerade-bloodlines-windows-other.jpg';
            this.nowPlaying1.startDate = 'Nov 8, 2021';
            this.nowPlaying1.playTime = '96 Hours';
            this.nowPlaying1.completionNote = 'Can you tell I like this game a lot?';
            this.nowPlaying1.developer = 'Troika Games';
            this.nowPlaying1.publisher = 'Activision';
            this.nowPlaying1.releaseDate = 'Nov 16, 2004';
            this.nowPlaying1.genre = 'Action-RPG';
            //this.nowPlaying1.name = '日本語テスト';
        //nowPlaying1 = null;
        this.nowPlaying2 = this.newGame('Hybrid Heaven', 'N64');
            this.updateCompletionStatus(this.nowPlaying2, 'beaten');
        this.nowPlaying3 = this.newGame('Phantasy Star', 'SMS');
            this.updateCompletionStatus(this.nowPlaying3, 'unfinished');
    }

    updateCompletionStatus(gameInfo, completionStatus) {
        /* Mastery is an optional flag to denote special completions (score-attacks, speedruns, etc.)
           Unlike the original Backloggery, we don't want it to override normal completion status
           (completing a speedrun doesn't mean you 100%d the game, so it could be 'beaten' and still 'mastered';
           in the current Backloggery, all mastered games are denoted 'completed'.)
           so it has an optional flag here, and we use HTML to override the displayed completion status
           if it is mastered. */
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

    nowPlaying1Clicked() {
        jquery(this.template.querySelector(".slds-accordion")).hide();
        this.expandedNP1Showing = true;
    }

    nowPlaying1ExpandedClicked() {
        jquery(this.template.querySelector(".slds-accordion")).show();
        this.expandedNP1Showing = false;
    }

    nowPlaying2Clicked() {
        jquery(this.template.querySelector(".slds-accordion")).hide();
        this.expandedNP2Showing = true;
    }

    nowPlaying2ExpandedClicked() {
        jquery(this.template.querySelector(".slds-accordion")).show();
        this.expandedNP2Showing = false;
    }

    nowPlaying3Clicked() {
        jquery(this.template.querySelector(".slds-accordion")).hide();
        this.expandedNP3Showing = true;
    }

    nowPlaying3ExpandedClicked() {
        jquery(this.template.querySelector(".slds-accordion")).show();
        this.expandedNP3Showing = false;
    }
}