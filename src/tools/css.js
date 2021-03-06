// @flow

export const css = {
    classes: (classes: {[key: string]: boolean | () => boolean }) => {
        const css = []
        for(const key in classes) {
            if(classes[key]) {
                css.push(key)
            }
        }
        return css.join(" ")
    },
    addClass: (elt: HTMLElement | EventTarget, cname: string) => {
        if(elt instanceof HTMLElement)
            elt.className = elt.className
                .split(" ")
                .filter(c => c !== cname)
                .join(" ") + " " + cname
    },
    removeClass: (elt: HTMLElement | EventTarget, cname: string) => {
        if(elt instanceof HTMLElement)
            elt.className = elt.className
                .split(" ")
                .filter(c => c !== cname)
                .join(" ")
    },
    hasClass: (elt: HTMLElement | EventTarget, cname: string) =>
        elt instanceof HTMLElement ? elt.className.indexOf(cname) >= 0 : false
}