var conanData = [
    {
        "index": 1,
        "episode": 1,
        "episode_kr": "1기 1화",
        "title_kr": "눈물의 진주목걸이",
        "title_jp": "하나",
        "namu": "https:\/\/namu.wiki\/w\/%EC%A0%9C%ED%8A%B8%20%EC%BD%94%EC%8A%A4%ED%84%B0%20%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4"
 },
    {
        "index": 2,
        "episode": 2,
        "episode_kr": "1기 2화",
        "title_kr": "이슬이를 찾아라",
        "title_jp": "둘",
        "namu": "https:\/\/namu.wiki\/w\/%EC%82%AC%EC%9E%A5%20%EC%98%81%EC%95%A0%20%EC%9C%A0%EA%B4%B4%EC%82%AC%EA%B1%B4"
 },
    {
        "index": 3,
        "episode": 11,
        "episode_kr": "1기 13~14화",
        "title_kr": "월광 소나타",
        "title_jp": "셋",
        "namu": "https:\/\/namu.wiki\/w\/%ED%94%BC%EC%95%84%EB%85%B8%20%EC%86%8C%EB%82%98%ED%83%80%E3%80%8E%EC%9B%94%EA%B4%91%E3%80%8F%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4"
 },
    {
        "index": 4,
        "episode": 43,
        "episode_kr": "1기 31화",
        "title_kr": "가짜 엄마 소동",
        "title_jp": "넷",
        "namu": "https:\/\/namu.wiki\/w\/%EC%97%90%EB%8F%84%EA%B0%80%EC%99%80%20%EC%BD%94%EB%82%9C%20%EC%9C%A0%EA%B4%B4%EC%82%AC%EA%B1%B4"
 },
    {
        "index": 5,
        "episode": 48,
        "episode_kr": "1기 35화~36화",
        "title_kr": "돌아온 남도일",
        "title_jp": "다섯",
        "namu": "https:\/\/namu.wiki\/w\/%EC%99%B8%EA%B5%90%EA%B4%80%20%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4"
 },
    {
        "index": 6,
        "episode": 54,
        "episode_kr": "1기 40화",
        "title_kr": "뒤바뀐 가방",
        "title_jp": "여섯",
        "namu": "https:\/\/namu.wiki\/w\/%EA%B2%8C%EC%9E%84%20%ED%9A%8C%EC%82%AC%20%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4"
 },
    {
        "index": 7,
        "episode": 57,
        "episode_kr": "1기 43화~44화",
        "title_kr": "추리여행에서 생긴 일",
        "title_jp": "일곱",
        "namu": "https:\/\/namu.wiki\/w\/%ED%99%88%EC%A6%88%20%ED%94%84%EB%A6%AC%ED%81%AC%20%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4"
 },
    {
        "index": 8,
        "episode": 76,
        "episode_kr": "1기 55화~56화",
        "title_kr": "코난 대 괴도키드",
        "title_jp": "여덜",
        "namu": "#"
 },
    {
        "index": 9,
        "episode": 118,
        "episode_kr": "#",
        "title_kr": "복수의 연쇄 살인 사건",
        "title_jp": "아홉",
        "namu": "https:\/\/namu.wiki\/w\/%EB%82%98%EB%8B%88%EC%99%80%EC%9D%98%20%EC%97%B0%EC%86%8D%20%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4"
 },
    {
        "index": 10,
        "episode": 128,
        "episode_kr": "2기 26화",
        "title_kr": "검은 조직 10억 엔 강탈사건",
        "title_jp": "열",
        "namu": "https:\/\/namu.wiki\/w\/%EA%B2%80%EC%9D%80%20%EC%A1%B0%EC%A7%81%2010%EC%96%B5%20%EC%97%94%20%EA%B0%95%ED%83%88%EC%82%AC%EA%B1%B4"
 }
];



//기본 설정
const urlParams = new URLSearchParams(window.location.search);
var startEpNum;
if (urlParams.has('ep')) {
    console.log(urlParams.get('ep') + ":url 파라미터");
    startEpNum = urlParams.get('ep')
} else {
    startEpNum = 0;
}
DisplayInformationOnTheScreen(startEpNum);




//이미지 슬라이드에 이미지 추가
for (var i = 0; i < 5; i++) {
    $('#mainThumbnail').append("<div class='carousel-item ep_img'><img src='img/Thumbnail"+(i+4)+".webp' class='d-block w-100' alt='...'> </div>");
}


//기본 이미지 변경
//$('#carouselExampleControls').carousel(1);

//이미지 슬라이드 움직임이 끝나면 정보표시
$('#carouselExampleControls').on('slid.bs.carousel', function (Event) {
    DisplayInformationOnTheScreen(Event.to);

})


//화면에 지금 에피소드 번호, 제목 등 표시하는 코드
function DisplayInformationOnTheScreen(epNum) {
    //console.log(epNum);
    $('#ep').text(conanData[epNum].episode + "화");
    $('#ep_kr').text(conanData[epNum].episode_kr);
    $('#ep_title').text(conanData[epNum].title_kr);


    // 현재 URL을 가져옴

    // 새로운 URL로 페이지를 리디렉션
    //window.location.href = currentUrl.toString();


}