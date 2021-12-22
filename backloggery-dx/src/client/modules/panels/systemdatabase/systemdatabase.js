import { LightningElement } from 'lwc';

export default class SystemDatabase extends LightningElement {
    systemMetadata = {
        atari2600: {
            name: 'Atari 2600',
            abbreviation: 'a2600',
            manufacturer: 'Atari, Inc.',
            releaseDate: 'Sep 1977',
            discontinuedDate: 'Jan 1, 1992',
            systemImage: null,
            description: null,
            unitssold: null,
        },
        sms: {
            name: 'Sega Master System',
            abbreviation: 'sms',
            manufacturer: 'Sega Corporation',
            releaseDate: 'Oct 20, 1985',
            discontinuedDate: '1991',
            systemImage: null,
            description: null,
            unitssold: null
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

    // Storing this in an array instead (to simplify later code) would break when adding new things to the database
    // dynamically when a new console is added, so doing it this way is annoying but future-proof.
    // This may be able to be condensed in a loop if the data is added to systemMetadata instead
    steam = this.newSystem('Steam');
    pc = this.newSystem('PC');
    itch = this.newSystem('itch.io');
    browser = this.newSystem('Browser');
    ps5 = this.newSystem('PlayStation 5');
    xboxonex = this.newSystem('Xbox One X');
    nswitch = this.newSystem('Nintendo Switch');
    ps4 = this.newSystem('PlayStation 4');
    xboxone = this.newSystem('Xbox One');
    wiiu = this.newSystem('Wii U');
    threeds = this.newSystem('Nintendo 3DS');
    dsiware = this.newSystem('DSiWare');
    xbox360 = this.newSystem('Xbox 360');
    ps3 = this.newSystem('PlayStation 3');
    wii = this.newSystem('Wii');
    nds = this.newSystem('Nintendo DS');
    gamecube = this.newSystem('GameCube');
    gba = this.newSystem('Game Boy Advance');
    xbox = this.newSystem('Xbox');
    ps2 = this.newSystem('PlayStation 2');
    nintendo64 = this.newSystem('Nintendo 64');
    psx = this.newSystem('PlayStation');
    saturn = this.newSystem('Sega Saturn');
    ngcd = this.newSystem('Neo Geo CD');
    threedo = this.newSystem('3DO');
    cdtv = this.newSystem('Commodore CDTV');
    jaguar = this.newSystem('Atari Jaguar');
    gbc = this.newSystem('Game Boy/Color');
    snes = this.newSystem('SNES');
    gb = this.newSystem('Game Boy');
    genesis = this.newSystem('Genesis/Mega Drive');
    gamegear = this.newSystem('Game Gear');
    fds = this.newSystem('Famicom Disk System');
    sms = this.newSystem('Sega Master System');
    msx = this.newSystem('MSX');
    sg1k = this.newSystem('Sega SG-1000');
    nes = this.newSystem('NES');
    dos = this.newSystem('DOS');
    apple2 = this.newSystem('Apple ][');
    arcade = this.newSystem('Arcade');
    misc = this.newSystem('Miscellaneous');

    systems = {steam: this.steam,
                pc: this.pc,
                itch: this.itch,
                browser: this.browser,
                ps5: this.ps5,
                xboxonex: this.xboxonex,
                nswitch: this.nswitch,
                ps4: this.ps4,
                xboxone: this.xboxone,
                wiiu: this.wiiu,
                threeds: this.threeds,
                dsiware: this.dsiware,
                xbox360: this.xbox360,
                ps3: this.ps3,
                wii: this.wii,
                nds: this.nds,
                gamecube: this.gamecube,
                gba: this.gba,
                xbox: this.xbox,
                ps2: this.ps2,
                nintendo64: this.nintendo64,
                psx: this.psx,
                saturn: this.saturn,
                ngcd: this.ngcd,
                threedo: this.threedo,
                cdtv: this.cdtv,
                jaguar: this.jaguar,
                gbc: this.gbc,
                snes: this.snes,
                gb: this.gb,
                genesis: this.genesis,
                gamegear: this.gamegear,
                fds: this.fds,
                sms: this.sms,
                msx: this.msx,
                sg1k: this.sg1k,
                nes: this.nes,
                dos: this.dos,
                apple2: this.apple2,
                arcade: this.arcade,
                misc: this.misc
            };


    placeholderDataInitialize() {
        this.steam.unfinishedCount = 15;
        this.steam.unplayedCount = 398;
        this.steam.beatenCount = 9;
        this.steam.completedCount = 4;
        this.steam.masteredCount = 1;
        this.steam.nullCount = 16;

        this.pc.unfinishedCount = 2;
        this.pc.unplayedCount = 9;
        this.pc.beatenCount = 15;
        this.pc.completedCount = 9;
        this.pc.masteredCount = 3;
        this.pc.nullCount = 2;

        this.browser.unfinishedCount = 0;
        this.browser.unplayedCount = 0;
        this.browser.beatenCount = 38;
        this.browser.completedCount = 0;
        this.browser.masteredCount = 0;
        this.browser.nullCount = 0;

        this.itch.unfinishedCount = 1;
        this.itch.unplayedCount = 0;
        this.itch.beatenCount = 4;
        this.itch.completedCount = 4;
        this.itch.masteredCount = 0;
        this.itch.nullCount = 0;

        this.nswitch.unfinishedCount = 2;
        this.nswitch.unplayedCount = 0;
        this.nswitch.beatenCount = 0;
        this.nswitch.completedCount = 0;
        this.nswitch.masteredCount = 0;
        this.nswitch.nullCount = 0;

        this.wiiu.unfinishedCount = 2;
        this.wiiu.unplayedCount = 0;
        this.wiiu.beatenCount = 1;
        this.wiiu.completedCount = 0;
        this.wiiu.masteredCount = 0;
        this.wiiu.nullCount = 0;

        this.threeds.unfinishedCount = 1;
        this.threeds.unplayedCount = 0;
        this.threeds.beatenCount = 1;
        this.threeds.completedCount = 0;
        this.threeds.masteredCount = 0;
        this.threeds.nullCount = 0;

        this.xbox360.unfinishedCount = 1;
        this.xbox360.unplayedCount = 21;
        this.xbox360.beatenCount = 0;
        this.xbox360.completedCount = 0;
        this.xbox360.masteredCount = 0;
        this.xbox360.nullCount = 0;

        this.wii.unfinishedCount = 0;
        this.wii.unplayedCount = 10;
        this.wii.beatenCount = 1;
        this.wii.completedCount = 6;
        this.wii.masteredCount = 0;
        this.wii.nullCount = 0;

        this.nds.unfinishedCount = 1;
        this.nds.unplayedCount = 0;
        this.nds.beatenCount = 2;
        this.nds.completedCount = 2;
        this.nds.masteredCount = 0;
        this.nds.nullCount = 0;

        this.gamecube.unfinishedCount = 0;
        this.gamecube.unplayedCount = 1;
        this.gamecube.beatenCount = 3;
        this.gamecube.completedCount = 2;
        this.gamecube.masteredCount = 0;
        this.gamecube.nullCount = 0;

        this.gba.unfinishedCount = 0;
        this.gba.unplayedCount = 4;
        this.gba.beatenCount = 4;
        this.gba.completedCount = 3;
        this.gba.masteredCount = 0;
        this.gba.nullCount = 0;

        this.xbox.unfinishedCount = 0;
        this.xbox.unplayedCount = 4;
        this.xbox.beatenCount = 0;
        this.xbox.completedCount = 0;
        this.xbox.masteredCount = 0;
        this.xbox.nullCount = 0;

        this.ps2.unfinishedCount = 0;
        this.ps2.unplayedCount = 5;
        this.ps2.beatenCount = 3;
        this.ps2.completedCount = 1;
        this.ps2.masteredCount = 0;
        this.ps2.nullCount = 1;

        this.nintendo64.unfinishedCount = 2;
        this.nintendo64.unplayedCount = 5;
        this.nintendo64.beatenCount = 1;
        this.nintendo64.completedCount = 3;
        this.nintendo64.masteredCount = 0;
        this.nintendo64.nullCount = 0;

        this.psx.unfinishedCount = 0;
        this.psx.unplayedCount = 8;
        this.psx.beatenCount = 8;
        this.psx.completedCount = 1;
        this.psx.masteredCount = 1;
        this.psx.nullCount = 0;

        this.saturn.unfinishedCount = 0;
        this.saturn.unplayedCount = 2;
        this.saturn.beatenCount = 2;
        this.saturn.completedCount = 0;
        this.saturn.masteredCount = 0;
        this.saturn.nullCount = 0;

        this.ngcd.unfinishedCount = 0;
        this.ngcd.unplayedCount = 0;
        this.ngcd.beatenCount = 1;
        this.ngcd.completedCount = 0;
        this.ngcd.masteredCount = 1;
        this.ngcd.nullCount = 0;

        this.cdtv.unfinishedCount = 0;
        this.cdtv.unplayedCount = 0;
        this.cdtv.beatenCount = 0;
        this.cdtv.completedCount = 1;
        this.cdtv.masteredCount = 1;
        this.cdtv.nullCount = 0;

        this.snes.unfinishedCount = 0;
        this.snes.unplayedCount = 2;
        this.snes.beatenCount = 0;
        this.snes.completedCount = 2;
        this.snes.masteredCount = 0;
        this.snes.nullCount = 0;

        this.gbc.unfinishedCount = 0;
        this.gbc.unplayedCount = 0;
        this.gbc.beatenCount = 3;
        this.gbc.completedCount = 1;
        this.gbc.masteredCount = 1;
        this.gbc.nullCount = 0;

        this.gb.unfinishedCount = 0;
        this.gb.unplayedCount = 1;
        this.gb.beatenCount = 5;
        this.gb.completedCount = 4;
        this.gb.masteredCount = 0;
        this.gb.nullCount = 0;

        this.genesis.unfinishedCount = 0;
        this.genesis.unplayedCount = 0;
        this.genesis.beatenCount = 2;
        this.genesis.completedCount = 0;
        this.genesis.masteredCount = 0;
        this.genesis.nullCount = 0;

        this.gamegear.unfinishedCount = 0;
        this.gamegear.unplayedCount = 0;
        this.gamegear.beatenCount = 2;
        this.gamegear.completedCount = 0;
        this.gamegear.masteredCount = 0;
        this.gamegear.nullCount = 0;

        this.fds.unfinishedCount = 0;
        this.fds.unplayedCount = 0;
        this.fds.beatenCount = 2;
        this.fds.completedCount = 0;
        this.fds.masteredCount = 0;
        this.fds.nullCount = 0;

        this.sms.unfinishedCount = 1;
        this.sms.unplayedCount = 0;
        this.sms.beatenCount = 2;
        this.sms.completedCount = 1;
        this.sms.masteredCount = 1;
        this.sms.nullCount = 0;

        this.msx.unfinishedCount = 0;
        this.msx.unplayedCount = 0;
        this.msx.beatenCount = 0;
        this.msx.completedCount = 1;
        this.msx.masteredCount = 0;
        this.msx.nullCount = 0;

        this.sg1k.unfinishedCount = 0;
        this.sg1k.unplayedCount = 0;
        this.sg1k.beatenCount = 0;
        this.sg1k.completedCount = 1;
        this.sg1k.masteredCount = 1;
        this.sg1k.nullCount = 0;

        this.nes.unfinishedCount = 0;
        this.nes.unplayedCount = 0;
        this.nes.beatenCount = 21;
        this.nes.completedCount = 10;
        this.nes.masteredCount = 5;
        this.nes.nullCount = 0;

        this.dos.unfinishedCount = 0;
        this.dos.unplayedCount = 0;
        this.dos.beatenCount = 1;
        this.dos.completedCount = 0;
        this.dos.masteredCount = 1;
        this.dos.nullCount = 0;

        this.apple2.unfinishedCount = 1;
        this.apple2.unplayedCount = 0;
        this.apple2.beatenCount = 2;
        this.apple2.completedCount = 0;
        this.apple2.masteredCount = 0;
        this.apple2.nullCount = 0;

        this.arcade.unfinishedCount = 0;
        this.arcade.unplayedCount = 0;
        this.arcade.beatenCount = 3;
        this.arcade.completedCount = 0;
        this.arcade.masteredCount = 0;
        this.arcade.nullCount = 0;

        this.misc.unfinishedCount = 0;
        this.misc.unplayedCount = 0;
        this.misc.beatenCount = 6;
        this.misc.completedCount = 0;
        this.misc.masteredCount = 6;
        this.misc.nullCount = 0;
    }

    connectedCallback() {
        window.jquery = require('../../../../jquery');
        //Placeholder
        this.placeholderDataInitialize();
        this.recalculateSystemStats();
        this.recalculateTotalStats();
        this.populateMetadata();
    }

    renderedCallback() {
        this.addTableRows();
        jquery(this.template.querySelector('.unall-progress-bar')).css(
            'width', `${this.totalStats.unAllPercentage}%`
        );
        jquery(this.template.querySelector('.finished-progress-bar')).css(
            'width', `${this.totalStats.finishedPercentage}%`
        );
        jquery(this.template.querySelector('.null-progress-bar')).css(
            'width', `${this.totalStats.nullPercentage}%`
        );
    }

    addNewTableRow(system) {
        window.jquery = require('../../../../jquery');
        jquery(this.template.querySelector('.append-next-system')).append(`\n
        <tr class='slds-hint-parent'>\n
        <th data-label='${system.name} Games' scope='row'>\n
          <div class='slds-truncate' title='${system.name}'>\n
            <a class='sysbox' href='#' tabindex='-1'>${system.name}</a>\n
          </div>\n
        </th>\n
        <td data-label='Unfinished and Unplayed'>\n
          <div class='slds-truncate' title='${system.name} Unfinished and Unplayed'>\n
            <img src='../../../resources/completionstatus/unfinished.png' width='20' height='20'>\n
            &ensp;${system.unfinishedCount}&nbsp;/&nbsp;\n
            <img src='../../../resources/completionstatus/unplayed.png' width='20' height='20'>\n
            &ensp;${system.unplayedCount}\n
            </div>\n
        </td>\n
        <td data-label='Beaten'>\n
          <div class='slds-truncate' title='${system.name} Beaten'>\n
            <img src='../../../resources/completionstatus/beaten.png' width='20' height='20'>\n
            &ensp;${system.beatenCount}\n
          </div>\n
        </td>\n
        <td data-label='Completed'>\n
          <div class='slds-truncate' title='${system.name} Completed'>\n
            <img src='../../../resources/completionstatus/completed.png' width='20' height='20'>\n
            &ensp;${system.completedCount}\n
          </div>\n
        </td>\n
        <td data-label='Total Count'>\n
            <div class='slds-truncate slds-float_right' title='${system.name} Total'>\n
                  Total: ${system.totalGameCount}\n
            </div>\n
        </td>\n
      </tr>`);
    }

    addTableRows() {
        for (const [systemName, systemInfo] of Object.entries(this.systems))  {
            if(systemInfo.totalGameCount) {
                this.addNewTableRow(systemInfo);
            }
          }
    }

    newSystem(systemName) {
        // This will pull all metadata from a local database because this rarely needs to be changed or updated
        // For some reason, systemName doesn't need to be the same as the object's name in order for dynamic table rendering to work. I have no idea why.
        return {
            name: systemName,
            abbreviation: null,
            manufacturer: null,
            releaseDate: null,
            discontinuedDate: null,
            systemImage: null,
            description: null,
            unitssold: null,
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
        this.totalStats.unAllPercentage = 100 * this.totalStats.unAllCount / this.totalStats.totalGameCount;
        this.totalStats.finishedPercentage = 100 * this.totalStats.finishedCount / this.totalStats.totalGameCount;
        this.totalStats.nullPercentage = 100 * this.totalStats.nullCount / this.totalStats.totalGameCount;
    }

    recalculateSystemStats() {
        for (const [systemName, systemInfo] of Object.entries(this.systems)) {
            systemInfo.totalGameCount = systemInfo.unfinishedCount + systemInfo.unplayedCount + systemInfo.beatenCount + systemInfo.completedCount + systemInfo.nullCount;
        }
    }


    populateMetadata() {
        for (const [systemName, systemInfo] of Object.entries(this.systems)) {
            for (const [metadataName, metadataInfo] of Object.entries(this.systemMetadata)) {
                if(systemInfo.name == metadataInfo.name) {
                    systemInfo.abbreviation = metadataInfo.abbreviation;
                    systemInfo.manufacturer = metadataInfo.manufacturer;
                    systemInfo.releaseDate = metadataInfo.releaseDate;
                    systemInfo.discontinuedDate = metadataInfo.discontinuedDate;
                    systemInfo.systemImage = metadataInfo.systemImage;
                    systemInfo.description = metadataInfo.description;
                    systemInfo.unitssold = metadataInfo.unitssold;
                }
            }
        }
    }
}