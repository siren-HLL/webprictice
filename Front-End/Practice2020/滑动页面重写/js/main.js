document.documentElement.addEventListener("touchstart",touchStartEvent)
document.documentElement.addEventListener("touchend",touchEndEvent)

let pagesBox = document.getElementsByClassName("pages-box")[0];
let touchData={
    startX: "",
    startY: "",
    endX: "",
    endY: ""
}
function touchStartEvent(e){
    touchData.startX = e.touches[0].pageX;
    touchData.startY = e.touches[0].pageY;
    console.log(`开始滑动了 x:${touchData.startX} y:${touchData.startY}`)
}
function touchEndEvent(e){
    touchData.endX = e.changedTouches[0].pageX;
    touchData.endY = e.changedTouches[0].pageY;
    console.log(`停止滑动了 x:${touchData.endX} y:${touchData.endY}`)
    touchXY()
}
function touchXY(){
    let touchjl = (touchData.startY-touchData.endY)
    console.log(touchjl)
    if(Math.abs(touchjl)>50){
        //触发了滑动
        if(touchjl>0){
            //用户从下向上滑动 down
            console.log("next")
            pageMove("down")
        }else{
            //用户从上往下滑动 up
            console.log("last")
            pageMove("up")
        }
    }
}
let pageStatus={
    pageindex: 1,
    position: 0,
    moveDistance: 667
}
/*
    1 不能上一页 3不能下一页
*/
//根据当前页面判断移动距离
function pageMove(fx){
    if(fx == "up" && pageStatus.pageindex == 1) return
    if(fx == "down" && pageStatus.pageindex == 3) return
    if(fx == "up"){
        pageStatus.position += pageStatus.moveDistance
        console.log(pageStatus.position)
        pageStatus.pageindex--
    }
    if(fx == "down"){
        //页面移动
        pageStatus.position -= pageStatus.moveDistance
        //页面+1
        console.log(pageStatus.position)
        pageStatus.pageindex++
    }
    pagesBox.style.transform = `translate(0,${pageStatus.position}px)`
}