function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve,ms));
}
const phrases=["Forensic Profiler","Detective","Crime Scene Analyst"];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhaseIndex = 0;

const writeloop = async() => {
    while (true) {
        let curword = phrases[curPhaseIndex];

        for(let i=0; i < curword.length; i++)
        {
            el.innerText = curword.substring(0, i+1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);

        for(let i=curword.length; i > 0; i--)
        {
            el.innerText = curword.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);

        if(curPhaseIndex === phrases.length - 1)
        {
            curPhaseIndex = 0;
        }
        else
        {
           curPhaseIndex++;     
        }

    }
};

writeloop();

function btn1()
{
    document.getElementById('btn1').innerHTML="Case Selected";
}
function btn2()
{
    document.getElementById('btn1').innerHTML="Select Case";
}
function btn3()
{
    document.getElementById('btn2').innerHTML="Case Selected";
}
function btn4()
{
    document.getElementById('btn2').innerHTML="Select Case";
}
function btn5()
{
    document.getElementById('btn3').innerHTML="Case Selected";
}
function btn6()
{
    document.getElementById('btn3').innerHTML="Select Case";
}
function btn7()
{
    document.getElementById('btn4').innerHTML="Case Selected";
}
function btn8()
{
    document.getElementById('btn4').innerHTML="Select Case";
}
function btn9()
{
    document.getElementById('btn5').innerHTML="Case Selected";
}
function btn10()
{
    document.getElementById('btn5').innerHTML="Select Case";
}
function btn11()
{
    document.getElementById('btn6').innerHTML="Case Selected";
}
function btn12()
{
    document.getElementById('btn6').innerHTML="Select Case";
}
function btn13()
{
    document.getElementById('btn8').innerText="Verify";
}
$(document).on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
});
