function Page() {
    const date = new Date();
    const hours = date.getHours();
    let timeofDay;
    if(hours < 12) {
        timeofDay = 'good morning'
    } else if(hours > 12 && hours < 17) {
        timeofDay = 'good afternoon'
    }
    else if(hours > 17 && hours < 20) {
        timeofDay = 'good evening'
    } else {
        timeofDay = 'good night'
    }
    return(
        <div>hello.. {timeofDay}</div>
    );
}

ReactDOM.render(
    <div>
        <Page/>
    </div>,
    document.getElementById("root")
)