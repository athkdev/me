class Transpiler {
    text: string;

    constructor (story: string) {
        this.text = story;
    }

    siteImg() {
        try {

            const SELECTOR = 'site_img';
            
            let html: string = "";
            let altText:string = "";
            let url:string = "";
            
            const start = this.text.search(`<${SELECTOR}>`);
            const end = this.text.search(`</${SELECTOR}>`);
            const elements = this.text.substring(start + `<${SELECTOR}>`.length, end).split("&");

            elements.map(tag => {
                const inx = tag.indexOf("[");
                const tmp = tag.substring(0,inx);
                
                if (tmp.toLowerCase() === 'alttext') {
                    altText = tag.substring(inx+1, tag.length-1);
                } else if (tmp.toLowerCase() === 'url') {
                    url = tag.substring(inx+1, tag.length - 1);
                }
            })
            
            html =  `<img className="mx-auto my-2 w-3/4 md:w-3/5 rounded" alt="${altText}" src="${url}"/>`;
            
            return {
                toBeReplaced: this.text.substring(start, end + `</${SELECTOR}`.length+1 ),
                html
            }
        } catch (error) {
            console.log(error)
            return {
                toBeReplaced: "",
                html: ""
            }
        }
    }

    site_link_carousel() {
        try {
            const SELECTOR = 'site_link_carousel';
    
            
            const links: any = [];
            let html: string[] = [];
            
            const start = this.text.search(`<${SELECTOR}>`);
            const end = this.text.search(`</${SELECTOR}>`);
            const elements = this.text.substring(start + `<${SELECTOR}>`.length, end).split("&");
            
            elements.map(tag => {
                const inx = tag.indexOf("[");
                
                links.push({
                    siteName: tag.substring(0,inx),
                    url: tag.substring(inx+1, tag.length - 1)
                })
            })
            
            links.map((link: any, index: number) => {
                html.push(`<a class="mx-2 underline underline-offset-2 hover:opacity-70" href="${link.url}" target="_blank">${link.siteName}</a>`);
            })
    
            return {
                toBeReplaced: this.text.substring(start, end + `</${SELECTOR}`.length+1 ),
                html: `<div>${html.join(" • ")}</div>`
            }
        } catch (error) {
            console.log(error)

            return {
                toBeReplaced: "",
                html: ""
            }
        }
    }

    init() {
        const selectors: string[] = ["site_img", "site_link_carousel"];
        
        selectors.map((selector: string) => {
            while (this.text.includes(selector)) {

                if (selector === 'site_img') {
                    const {toBeReplaced, html} = this.siteImg();
                    this.text = this.text.replace(toBeReplaced, html)
                } else if (selector === 'site_link_carousel') {
                    const {toBeReplaced, html} = this.site_link_carousel();
                    this.text = this.text.replace(toBeReplaced, html)
                }  
            }
        })

        return this.text;
    }
}


export {Transpiler};