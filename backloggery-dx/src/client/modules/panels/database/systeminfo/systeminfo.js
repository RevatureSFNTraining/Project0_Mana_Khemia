import { LightningElement } from 'lwc';

export default class SystemInfo extends LightningElement {
    systemMetadata = {
        atari2600: {
            name: "Atari 2600",
            manufacturer: "Atari, Inc.",
            releaseDate: "Sep 1977",
            discontinuedDate: "Jan 1, 1992",
            systemImage: null,
            description: null
        },
    };
}