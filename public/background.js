

function checkTime(){
    const nowTime = new Date();
    
    const minutes = nowTime.getMinutes();
    const seconds = nowTime.getSeconds();

    if (minutes === 50 && seconds == 0){
        const youtubeURL = 'https://www.youtube.com/watch?v=6fnLKyRJsrs';
        window.open(youtubeURL,'_blank');
    }
}


chrome.tabs.onActivated.addListener(function(){
    setInterval(checkTime, 1000);
})

