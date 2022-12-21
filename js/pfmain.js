const main_cover = document.getElementById("main_cover");
const main_cover_h3 = document.querySelectorAll("#main_cover h3");
const main_cover_p = document.querySelector("#main_cover p");
const home = document.querySelector("#home");
const return_home = document.querySelector(".return_home");
const skill = document.querySelector("#skill");
const project_slide = document.querySelector("#project_slide")
const go_to_project_detail = document.querySelectorAll(".swiper-slide_inner img");
const go_to_project_list = document.querySelector(".go_to_project_list");
const project_detail = document.querySelector("#project_detail");
const contact = document.querySelector("#contact");
const about_me = document.querySelector("#about_me");
/* const chartjs_tooltip = document.querySelector("#chartjs-tooltip"); */
const detail_logo = document.querySelector(".detail_logo img");
const detail_gif = document.querySelector(".detail_gif img");
const detail_name = document.querySelector(".detail_name");
const detail_date = document.querySelector(".detail_date");
const detail_main = document.querySelector(".detail_main");
const detail_function = document.querySelector(".detail_function");
const detail_link = document.querySelector(".detail_link");
const project_name = document.querySelector(".project_name");
const site_menu = document.querySelectorAll(".site_menu");
const nav_menu = document.querySelectorAll("#nav li");
/* const tooltip = document.querySelector("#chartjs-tooltip");
tooltip.classList.add("display_none"); */
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

},5500)

setTimeout(function(){
    for(let i = 0; i<main_cover_h3.length; i++){
        main_cover_h3[i].classList.add("display_none");
    }
    main_cover_p.classList.remove("display_hidden");
},5800)


setTimeout(function(){
    main_cover.style["justify-content"] = 'flex-start'
    document.querySelector("#nav").classList.remove("display_hidden");

},8000)

setTimeout(function(){
    document.querySelector("#home p").classList.remove("display_hidden");
    document.querySelector("#home .cart_wrap").classList.remove("display_hidden");
    document.querySelector("#home .cart_wrap").classList.add("grow_up");
    /* document.querySelector("#chartjs-tooltip").classList.remove("display_hidden"); */
},9000)

setTimeout(function(){
    document.querySelector("#myChart").classList.remove("display_hidden");
    /* document.querySelector("#chartjs-tooltip").classList.remove("display_none"); */

},10000)

/* 홈 화면으로 돌아가기 */

return_home.addEventListener('click', ()=>{
    home.classList.remove("display_none");
    document.querySelector("#chartjs-tooltip").remove("display_none");
    site_menu.forEach((e,index)=>{
            e.classList.add("display_none");
    })
})


/* 메뉴 이동 함수 */
const siteMenuClick = (index) => {
    site_menu.forEach((e,index)=>{
        e.classList.add("display_none");
    })
    switch(index){
        case(0):{
            main_cover_p.innerHTML = "ABOUT ME"
            about_me.classList.remove("display_none");

            return;
        }
        case(1):{
            main_cover_p.innerHTML = "개발기록 & 개발일기"
            return;
        }
        case(2):{
            main_cover_p.innerHTML = "SKILL"
            skill.classList.remove("display_none");

            return;

        }
        case(3):{
            main_cover_p.innerHTML = "PROJECT"
            project_slide.classList.remove("display_none");
            return;
        }
        case(4):{
            main_cover_p.innerHTML = "CONTACT"
            contact.classList.remove("display_none");
            return;
        }
        default:
            break;
    }
}

/* nav 메뉴 누르기 */
nav_menu.forEach((e,index)=>{
    site_menu.forEach((e)=>{
        e.classList.add("display_none");
    })
    e.addEventListener('click',()=>{
        chartClick(index);
    })

})

/* 곡선 점 클릭 화면 전환하기 */
const chartClick = (e) => {
    console.log(e);
    home.classList.add("display_none");
    document.querySelector("#chartjs-tooltip").classList.add("display_none");
/*         document.querySelector("#home p").classList.add("display_none");
        document.querySelector("#myChart").classList.add("display_none");
        document.querySelector("#home .cart_wrap").classList.add("display_none");
        document.querySelector("#chartjs-tooltip").classList.add("display_none");  */   
        siteMenuClick(e);
}

/* project 디테일 페이지로 넘어가기 */
go_to_project_detail.forEach((e, index)=>{
    e.addEventListener("click", ()=>{
        console.log("클릭");
        main_cover_p.innerHTML = "PROJECT DETAIL";
        project_slide.classList.add("display_none");
        home.classList.add("display_none");
        project_detail.classList.remove("display_none");

        console.log(index);
        switch (index) {
            case 0:{
                detail_logo.src= "./img/shelter-logo.png";
                detail_gif.src = "./img/shelter-gif.gif";
                detail_gif.classList.remove("pc_gif");

                detail_name.innerHTML = '강남구 따숨쉼터';
                detail_date.innerHTML = '2022.11 ~ 2022.12';
                detail_main.innerHTML = 
                `<p>카카오 맵 API를 활용한 쉼터 위치 호출<br />
                14개 동의 주요역, 공공기관 경위도 데이터를 받아 맵 이동</p>`
                detail_function.innerHTML = 
                `<p>
                동별, 쉼터 유형별 쉼터 정보 조회<br />
                자동완성 검색엔진을 활용한 쉼터 정보 조회<br />
                긴급구조 서비스<br />
                기온별 맞춤 옷차림 정보 제공</p>`
                project_name.innerHTML = "강남구 따숨쉼터"
                detail_link.addEventListener("click", ()=>{
                    detail_link.href = "https://kimsuheon1122.github.io/winter_shelter_pwa/"
                })
            }
                break;
            case 1:{
                detail_logo.src= "./img/toss-logo.png";
                detail_gif.src = "./img/toss-gif.gif";
                detail_gif.classList.add("pc_gif");
                detail_name.innerHTML = '웹으로 만나는 토스뱅크';
                detail_date.innerHTML = '2022.11';
                detail_main.innerHTML = 
                `<p>토스팀의 트렌디한 디자인을 반영한 반응형 웹<br />
                JS를 활용한 스크롤 효과, 애니메이션 효과로<br />
                차세대 뱅크 서비스 구현</p>`
                detail_function.innerHTML = 
                `<p>
                24시간 토스 상담<br />
                모바일 - 주식 담기 기능<br />
                각 은행 대출 탭을 반영한 신뢰있는 대출 서비스 화면</p>`
                project_name.innerHTML = "토스뱅크"
                detail_link.addEventListener("click", ()=>{
                    detail_link.href = "https://kimsuheon1122.github.io/-project-toss/"
                })
            }
            default:
                break;
        }
    })
})


/* project 슬라이더 페이지로 돌아가기 */
go_to_project_list.addEventListener("click", ()=>{
    project_detail.classList.add("display_none");
    project_slide.classList.remove("display_none");
})



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

/* 프로젝트 스와이퍼 */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  