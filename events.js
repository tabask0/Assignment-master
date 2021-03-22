class Events {
    constructor(title, date, time){
        this.title = title
        this.date = date
        this.time = time
}
}

class Webinar extends Events {
    constructor(title, date, time, webinarTitle, link) {
        super(title, date, time)
        this.webinarTitle = webinarTitle
        this.link = link
    }
}

class Even extends Events {
    constructor(title, date, time,location, adress){
        super(title, date, time)
        this.location = location
        this.adress = adress
    }
}

class Theme extends Events{
    constructor(title, date, time, themeTitle){
        super(title, date, time,)
        this.themeTitle = themeTitle
    }
}

const eveniment = new Even("Craciun", "24.11.2021", "20:00", "Siberia", "Under the tree");
console.log(eveniment)
