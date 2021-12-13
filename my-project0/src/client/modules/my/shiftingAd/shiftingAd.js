import { LightningElement, api } from 'lwc';

const ads =
    [{
        inUse: false,
        img: "https://wallpaperaccess.com/full/1385607.jpg",
        text: "Space"
    },
    {
        inUse: false,
        img: "https://c4.wallpaperflare.com/wallpaper/878/101/200/space-galaxy-vertical-portrait-display-wallpaper-preview.jpg",
        text: "Space"
    },
    {
        inUse: false,
        img: "https://wallup.net/wp-content/uploads/2018/03/19/579863-vertical-portrait_display-748x1330.jpg",
        text: "Coast"
    },
    {
        inUse: false,
        img: "https://c4.wallpaperflare.com/wallpaper/847/397/235/blurred-colorful-vertical-portrait-display-wallpaper-preview.jpg",
        text: "Blurred"
    },
    {
        inUse: false,
        img: "https://c4.wallpaperflare.com/wallpaper/687/691/774/blurred-colorful-vertical-portrait-display-wallpaper-preview.jpg",
        text: "Blurred"
    },
    {
        inUse: false,
        img: "https://wallup.net/wp-content/uploads/2018/03/19/580174-colorful-blurred-vertical-portrait_display-748x1330.jpg",
        text: "Blurred"
    }
    ];

const SPEED_CLASS_MAP = {
    slow: 'fade-slow',
    fast: 'fade-fast',
    medium: 'fade-medium'
};
const DEFAULT_SPEED = 'medium';

export default class ShiftingAd extends LightningElement {
    animationSpeed = DEFAULT_SPEED;
    index = 0;
    isAnimating = true;

    @api
    set speed(value) {
        if (SPEED_CLASS_MAP[value]) {
            this.animationSpeed = value;
        } else {
            this.animationSpeed = DEFAULT_SPEED;
        }
        this.isAnimating = true;
    }

    // Return the internal speed property
    get speed() {
        return this.animationSpeed;
    }

    // Get the current advertisement
    get ad() {
        return ads[this.index];
    }

    // Map slow, medium, fast to CSS Animations
    get animationClass() {
        if (this.isAnimating) {
            return SPEED_CLASS_MAP[this.speed];
        }
        return 'hide';
    }

    //Handle the animation ending, update to next advertisement
    handleAnimationEnd() {
        this.isAnimating = false;
        this.index = (this.index + 1) % ads.length;

        setTimeout(() => this.updateAd(), 500);
    }

    // Update to the next advertisement and start animating
    updateAd() {
        this.isAnimating = true;
    }
}
