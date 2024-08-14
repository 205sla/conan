//json 가져오기
var conanData;
var mainEpNum = 0;
var isNamdoilMode = true;
fetch('conanEpDB.json')
    .then(response => response.json())
    .then(data => {
        conanData = data.Sheet1;
        deiteo_da_ilgeosseoyo(); // 데이터를 가져온 후 로그를 출력합니다.
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });



//기본 설정
function deiteo_da_ilgeosseoyo() {
    DisplayInformationOnTheScreen(mainEpNum);

    //이미지 슬라이드에 이미지 추가
    for (var i = 0; i < 44; i++) {
        $('#mainThumbnail').append("<div class='carousel-item ep_img'><img src='img/" + conanData[i + 3].episode + ".webp' class='d-block w-100' alt='...'> </div>");
    }
}




//남도일 신이치 모드 변경
$("#btnradio1").on("click", function () {
    isNamdoilMode = true;
    DisplayInformationOnTheScreen(mainEpNum);
});
$("#btnradio2").on("click", function () {
    isNamdoilMode = false;
    DisplayInformationOnTheScreen(mainEpNum);
});






//이미지 슬라이드 움직임이 끝나면 정보표시
$('#carouselExampleControls').on('slid.bs.carousel', function (Event) {
    DisplayInformationOnTheScreen(Event.to);
    mainEpNum = Event.to;
    setCookie('epCookie', Event.to);

})


//화면에 지금 에피소드 번호, 제목 등 표시하는 코드
function DisplayInformationOnTheScreen(epNum) {

    var epData = conanData[epNum];

    $('#ep').text(epData.episode + "화");
    $('#ep_kr').text(epData.episode_kr);

    if (isNamdoilMode) {
        $('#ep_title').text(epData.title_kr);
    } else {
        $('#ep_title').text(epData.title_jp);
    }


    //urlBox
    $('#urlBox').html("");

    var urls;
    if (epData.count > 0) {
        urls = [epData.epSortation1, epData.url_tving_kr1, epData.url_tving_jp1, epData.url_laftel_kr1, epData.url_laftel_jp1];
        makeUrlBox(urls);
    }
    if (epData.count > 1) {
        urls = [epData.epSortation2, epData.url_tving_kr2, epData.url_tving_jp2, epData.url_laftel_kr2, epData.url_laftel_jp2];
        makeUrlBox(urls);
    }
    if (epData.count > 2) {
        urls = [epData.epSortation3, epData.url_tving_kr3, epData.url_tving_jp3, epData.url_laftel_kr3, epData.url_laftel_jp3];
        makeUrlBox(urls);
    }
    if (epData.count > 3) {
        urls = [epData.epSortation4, epData.url_tving_kr4, epData.url_tving_jp4, epData.url_laftel_kr4, epData.url_laftel_jp4];
        makeUrlBox(urls);
    }
    if (epData.count > 4) {
        urls = [epData.epSortation5, epData.url_tving_kr5, epData.url_tving_j5, epData.url_laftel_kr5, epData.url_laftel_jp5];
        makeUrlBox(urls);
    }
    if (epData.count > 5) {
        urls = [epData.epSortation6, epData.url_tving_kr6, epData.url_tving_jp6, epData.url_laftel_kr6, epData.url_laftel_jp6];
        makeUrlBox(urls);
    }

}

function makeUrlBox(urls) {
    var newHtml = "<tr> <th scope=‘row’> " + urls[0] + " </th> ";

    //티빙
    if (urls[1] != '#' && urls[2] != '#') {
        newHtml += "<td><a class=‘link-offset-1’ href=" + urls[1] + " target='_blank'>더빙</a> / <a class=‘link-offset-1’ href=" + urls[2] + " target='_blank'>자막</a></td>";
    }
    if (urls[1] != '#' && urls[2] == '#') {
        newHtml += "<td><a class=‘link-offset-1’ href=" + urls[1] + " target='_blank'>더빙</a></td>";
    }
    if (urls[1] == '#' && urls[2] != '#') {
        newHtml += "<td><a class=‘link-offset-1’ href=" + urls[2] + " target='_blank'>더빙</a></td>";
    }
    if (urls[1] == '#' && urls[2] == '#') {
        newHtml += "<td>#</td>";
    }


    //라프텔
    if (urls[3] != '#' && urls[4] != '#') {
        newHtml += "<td><a class=‘link-offset-1’ href=" + urls[3] + " target='_blank'>더빙</a> / <a class=‘link-offset-1’ href=" + urls[4] + " target='_blank'>자막</a></td>";
    }
    if (urls[3] != '#' && urls[4] == '#') {
        newHtml += "<td><a class=‘link-offset-1’ href=" + urls[3] + " target='_blank'>더빙</a></td>";
    }
    if (urls[3] == '#' && urls[4] != '#') {
        newHtml += "<td><a class=‘link-offset-1’ href=" + urls[4] + " target='_blank'>더빙</a></td>";
    }
    if (urls[3] == '#' && urls[4] == '#') {
        newHtml += "<td>#</td>";
    }


    //시리즈온
    newHtml += "<td>연결중...</td>";

    //기타 
    newHtml += "<td>연결중...</td>";


    newHtml += "</tr>"
    $('#urlBox').append(newHtml);

}



//링크 복사
$("#copyLink").on("click", function () {
    // 현재 URL을 가져옵니다.
    const currentUrl = new URL(window.location.href);

    // 'ep' 파라미터를 설정합니다.
    currentUrl.searchParams.set('ep', mainEpNum + 1);

    // 수정된 URL을 문자열로 변환합니다.
    const newUrl = currentUrl.toString();

    // 클립보드에 복사하는 함수입니다.
    navigator.clipboard.writeText(newUrl).then(() => {
        showAlertCopySuccess(newUrl);
    }).catch(err => {
        showAlertCopyfailure(err);
    });

});




//복사 성공시 복사한 url 보이기
function showAlertCopySuccess(ShowUrl) {
    $("#copyAlert").append("<div class='alert alert-success d-flex align-items-center alert-dismissible fade show' role='alert'> <svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Success:'> <use xlink:href='#check-circle-fill' /> </svg> <div> <i class='bi bi-check-circle-fill'></i> URL이 클립보드에 복사되었습니다: " + ShowUrl + " </div><button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button> </div>");
}

//복사 실패시 경고창 보이기
function showAlertCopyfailure(showErr) {
    $("#copyAlert").append("<div class=‘alert alert-danger d-flex align-items-center alert-dismissible fade show’ role=‘alert’> <svg class=‘bi flex-shrink-0 me-2’ width=‘24’ height=‘24’ role=‘img’ aria-label=‘Danger:’> <use xlink:href=‘#exclamation-triangle-fill’ /> </svg> <div> <i class=‘bi bi-exclamation-triangle-fill’></i> example danger alert with an icon </div> <button type=‘button’ class=‘btn-close’ data-bs-dismiss=‘alert’ aria-label=‘Close’></button> </div> </div>");
}

//쿠키 설정
function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
