
class Main {
    constructor() {
        this.section = (".fund_section");
        this.data = [];
        this.init();
    }

    async init() {
        this.data = await getData();
        log(this.data);
        this.renderItem();
    }


    renderItem() {
        
    }
}