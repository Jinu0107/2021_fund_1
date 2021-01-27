window.addEventListener('load', () => {
    new App();
});


class App {
    constructor() {
        this.nowSection = $(".fund_section");
        this.sectionList = $(".section");
        this.json = [];
        this.init();
    }

    async init() {
        this.main = new Main();
        this.setEvent();
    }
    
    setEvent() {
        $(".paging_btn").on("click", (e) => {
            this.nowPagingBtn.removeClass("on");
            let idx = $(e.currentTarget).addClass("on").data("idx");
            this.nowSection.hide();
            this.nowSection = $(this.sectionList[idx]).show();
        });
    }

    get nowPagingBtn() {
        return $(".paging_btn.on");
    }
}