class Utils {
    static toTitleCase(str: string): string {
        if (!str) {
            return '';
        }

        const strParts = str.toLowerCase().split(' ');

        for (let i = 0; i < strParts.length; i++) {
            strParts[i] = strParts[i].charAt(0).toUpperCase() + strParts[i].slice(1);
        }

        return strParts.join(' ');
    }

    static capitalizeFirstLetter(str: string): string {
        if (!str) {
            return '';
        }

        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static forceHttps(url: string): string {
        return url.replace(/^https?/, 'https');
    }

    static replaceSingleQuotes(str: string): string {
        return str.replace(/'/g, '"');
    }

    static parseJSON(text: string, fallback?: any, onCatch?: (err: Error) => void): any {
        try {
            // eslint-disable-next-line no-restricted-properties
            return JSON.parse(text);
        } catch (err: any) {
            if (typeof onCatch === 'function') {
                onCatch(err);
            }

            return fallback;
        }
    }

    static decodeBase64(text: string, fallback = '', onCatch?: (err: Error) => void): string {
        try {
            // eslint-disable-next-line no-restricted-properties
            return window.atob(text);
        } catch (err: any) {
            if (typeof onCatch === 'function') {
                onCatch(err);
            }

            return fallback;
        }
    }

    /**
     * Генерирует диапазон целых чисел от start (0 по дефолту) до end-1 включительно
     */
    static range(end: number, start = 0): number[] {
        const range: number[] = [];

        for (let i = start; i < end; i++) {
            range.push(i);
        }

        return range;
    }

    static getRandomInt(): number {
        let num = 0;

        while (num === 0) {
            // Math.random выдает числа в диапазоне [0, 1)
            num = Math.random();
        }

        return Number(String(num).substring(2));
    }
}

export {
    Utils,
};