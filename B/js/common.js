const log = console.log;


async function getData() {
    let json = await $.getJSON("/js/fund.json");
    let data = json.map(data => {
        return {
            
        }
    });
    log(data);
}


