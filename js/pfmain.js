const main_cover = document.getElementsByClassName("main_cover");
const main_cover_h3 = document.querySelectorAll(".main_cover h3");
const main_cover_p = document.querySelector(".main_cover p");

var index= 0;

let interval =
    setInterval(function(){
        main_cover_h3[index++].classList.remove("display_hidden");
        if(index === main_cover_h3.length){
            clearInterval(interval);
            index = 0;
        }

    },1500)

setTimeout(function(){
    for(let i = 0; i<main_cover_h3.length; i++){
        main_cover_h3[i].classList.add("display_hidden");
    }
    document.querySelector("#chartjs-tooltip").classList.add("display_none");

},5500)

setTimeout(function(){
    for(let i = 0; i<main_cover_h3.length; i++){
        main_cover_h3[i].classList.add("display_none");
    }
    main_cover_p.classList.remove("display_hidden");

},5800)

setTimeout(function(){
    main_cover[0].style["justify-content"] = 'flex-start'
    document.querySelector("#nav").classList.remove("display_hidden");

},8000)

setTimeout(function(){
    document.querySelector("#home p").classList.remove("display_hidden");
    document.querySelector("#home .cart_wrap").classList.remove("display_hidden");
    document.querySelector("#home .cart_wrap").classList.add("grow_up");
    document.querySelector("#chartjs-tooltip").classList.remove("display_hidden");
},9000)

setTimeout(function(){
    document.querySelector("#myChart").classList.remove("display_hidden");
    document.querySelector("#chartjs-tooltip").classList.remove("display_none");

},10000)

/* 곡선 점 클릭 화면 전환하기 */
const chartClick = (e) => {
    console.log(e);

        document.querySelector("#home p").classList.add("display_hidden");
        document.querySelector("#myChart").classList.add("display_hidden");
        document.querySelector("#home .cart_wrap").classList.add("display_hidden");
        document.querySelector("#chartjs-tooltip").classList.add("display_none");    
    switch(e){
        case(0):{
            main_cover_p.innerHTML = "ABOUT ME"
            console.log("0");
            return;
        }
        case(1):{
            main_cover_p.innerHTML = "개발기록 & 개발일기"
            console.log("1");
            return;
 

        }
        case(2):{
            main_cover_p.innerHTML = "SKILL"

            console.log("2");
            return;

        }
        case(3):{

            main_cover_p.innerHTML = "PROJECT"
            console.log("3");

            return;
        }
        case(4):{
            main_cover_p.innerHTML = "CONTACT"
            return;


        }
    }
}
/* 그래프 그리기 */
  const ctx = document.getElementById('myChart');
const dataSet = [5, 10, 20, 40, 50, 60];
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['ABOUT ME', '개발기록&개발일기', 'SKILL', 'PROJECT', 'CONTACT'],
      datasets: [{
        data: dataSet,
        borderWidth: 8,
        borderColor: "#b7b7b7",
        tension: 0.5,
      }]
    },
    options: {
        /* 몇번째 구간의 점을 클릭했는지 */
        onClick : (e) => {
            const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
            chartClick(dataX);
        },
        hoverRadius: 14,
        hoverBackgroundColor: 'white',
        plugins: {
            tooltip: {
                // Disable the on-canvas tooltip
                enabled: false,

                external: function(context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<table></table>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(getBody);

                        let innerHtml = '<thead>';

                        titleLines.forEach(function(title) {
                            innerHtml += '<tr><th>' + title + '</th></tr>';
                        });
                        innerHtml += '</thead>';

                        let tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    const position = context.chart.canvas.getBoundingClientRect();
                    const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 30 + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + - 70 +'px';
                    tooltipEl.style.font = bodyFont.string;
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                    tooltipEl.style.fontSize = "25px";

                }
            },
            legend: false
          },
        interaction: {
            /* mode: 'nearest', */
            intersect: false,
            axis: 'x'
          },
    },

  });

 

