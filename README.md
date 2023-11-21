# Music Explorer (ME)

## 1. 개요
 음악시장이 더 커져 가는 요즘 다양한 노래들이 계속 만들어지며, 개인의 취향에 부합한 노래라 할 지라도 그 노래를 발견하지 못해 놓치는 경우가 빈번하다.
이번 프로젝트에서는 사용자가 마음에 드는 노래를 더 많이 찾을 수 있도록 개개인마다 입력값을 받아 플레이리스트를 생성하는 서비스를 제공하고자한다.
 

## 2. 활용한 인공지능 API
### 2.1 Music Explorer 서비스에서 사용할 API
Spotify API

### 2.2 API의 입력과 출력 
사용자 노래 추천의 기반이 되는 가수,장르,트랙등의 값 뿐만 아니라 BPM,energy,popularity 등의 세세한 값 또한 입력되어 플레이리스트를 생성해낸다.

## 3. 웹페이지 구축
### 3.1 출력문

 ## 기본 화면
 <details><summary>
</summary>
 ```
 <!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="spotify.css">
    <script src="jquery/jquery-1.12.2.js"></script>
    <script src="jquery/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="jquery/jquery-ui.min.css" type="text/css" />

</head>
<title>Music Explorer</title>
</head>

<body>
    <div class="back_form">
        <form id="back_form" action="login.html" method="get">
            <input type="submit" value="로그인 페이지로 이동하기" id="back">
        </form>
    </div>
    <hr>

    <div class="moveHtml">
        <form id="spotify_form" action="spotify.html" method="get">
            <input type="submit" value="직접 선택해서 추천 받기" id="back">
        </form>
        <form id="photo_form" action="photolist.html" method="get">
            <input type="submit" value="사진으로 추천 받기" id="back">
        </form>
    </div>

    <hr>

    <div class="singer">
        <input id="singer" type="text" placeholder="가수 검색">
    </div>
    <div class="singersearch">
        <input type="submit" value="검색" onclick="saveSinger()">
    </div>
    
    <script>
        function saveSinger() {
            var singerInput = document.getElementById('singer').value;
    
            if (singerInput == "") {
                alert('빈 값 또는 이상한 값이 입력되었습니다')
            } else {
                alert('가수 : ' + singerInput);
            }   
        }
    </script>
    
        
    </script>



    <div class="album">
        <input id="album" type="text" placeholder="노래 및 앨범 검색">
    </div>
    <div class="albumsearch">
        <input type="submit" value="검색" onclick="saveAlbum()">
    </div>

    <script>
        function saveAlbum() {
            var albumInput = document.getElementById('album').value;
    
            if (albumInput == "") {
                alert('빈 값 또는 이상한 값이 입력되었습니다')
            } else {
            alert('노래 및 앨범: ' + albumInput);
            }
        }
    </script>

    <hr>

    <div class="bpm">
        BPM (30~300)
        <div>
            <input class="bpmnum" id="bpmmin" type="text" placeholder="최소치 입력">
            <input type="text" id="bpmmax" placeholder="최대치 입력">
        </div>
        <div class="bpmsubmit">
            <input type="submit" value="적용" onclick="saveBPM()">
        </div>
    </div>

    <script>
        function saveBPM() {
            var minInput = document.getElementById('bpmmin');
            var maxInput = document.getElementById('bpmmax');

            var minValue = parseInt(minInput.value);
            var maxValue = parseInt(maxInput.value);

            if (!isNaN(minValue) && !isNaN(maxValue) && minValue >= 30 && maxValue <= 300 && minValue <= maxValue) {
                alert('BPM값이 적용되었습니다! \n최소치: ' + minValue + '\n최대치: ' + maxValue);
            } else {
                alert('BPM값을 다시 입력해주세요. 30~300값을 입력해야합니다');
            }
        }
    </script>

    <div class="pop">
        인기도 (0~100)
        <div>
            <input class="popnum" id="popmin" type="text" placeholder="최소치 입력">
            <input type="text" id="popmax" placeholder="최대치 입력">
        </div>
        <div class="popsubmit">
            <input type="submit" value="적용" onclick="savePOP()">
        </div>
    </div>

    <script>
        function savePOP() {
            var minInput = document.getElementById('popmin');
            var maxInput = document.getElementById('popmax');

            var minValue = parseInt(minInput.value);
            var maxValue = parseInt(maxInput.value);
   
            if (!isNaN(minValue) && !isNaN(maxValue) && minValue >= 0 && maxValue <= 100 && minValue <= maxValue) {
                alert('인기도값이 적용되었습니다! \n최소치: ' + minValue + '\n최대치: ' + maxValue);
            } else {
                alert('인기도값을 다시 입력해주세요. 0~100값을 입력해야합니다');
            }
        }
    </script>

    <div class="energy">
        에너지 (0~1)
        <div>
            <input class="energynum" id="energymin" type="text" placeholder="최소치 입력 ex) 0.11">
            <input type="text" id="energymax" placeholder="최대치 입력 ex) 0.89">
        </div>
        <div class="energysubmit">
            <input type="submit" value="적용" onclick="saveENERGY()">
        </div>
    </div>

    <script>
        function saveENERGY() {
            var minInput = document.getElementById('energymin');
            var maxInput = document.getElementById('energymax');

            var minValue = parseFloat(minInput.value).toFixed(2);
            var maxValue = parseFloat(maxInput.value).toFixed(2);

            if (!isNaN(minValue) && !isNaN(maxValue) && minValue >= 0 && maxValue <= 1 && minValue <= maxValue) {
                alert('에너지값이 적용되었습니다! \n최소치: ' + minValue + '\n최대치: ' + maxValue);
            } else {
                alert('에너지값을 다시 입력해주세요. 0~1값을 입력해야합니다.');
            }
        }
    </script>

    <hr>

    <p>장르 선택</p>
    <div class="checkbox">
        <label><input type="checkbox" id="k-pop">케이팝</label>
        <label><input type="checkbox" id="pop">팝송</label>
        <label><input type="checkbox" id="j-pop">제이팝</label>
        <label><input type="checkbox" id="acoustic">어쿠스틱</label>
        <label><input type="checkbox" id="indie">인디</label>
        <label><input type="checkbox" id="dance">댄스</label>
    </div>
    <p></p>
    <div class="checksubmit">
        <input type="submit" value="적용" onclick="saveGenres()">
    </div>
    <div class="checkreset"><input type="reset" value="초기화"></div>


    <script>
        function saveGenres() {
            var selectedGenres = [];

       
            var checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');

            
            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    selectedGenres.push(checkbox.id);
                }
            });

          
            window.alert('선택한 장르 : ' + selectedGenres.join(', '));

           
            return false;
        }
    </script>


    <hr>


    <form id="playlist_form" action="playlist.html" method="get">
        <input type="submit" value="플레이리스트 생성" id="playlist">
    </form>
</body>


</html>
 ```
</details>

## 플레이리스트 생성 화면

 <details><summary>
</summary>
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <button onclick="history.back()">뒤로 가기</button>
      </div>
    <h1>플레이리스트</h1>
    
</body>
</html>
```
</details>

## 사진기반 추천 플레이리스트
```
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="spotify.css">
    <title>Music Explorer</title>
</head>

<body>
    <div class="back_form">
        <form id="back_form" action="login.html" method="get">
            <input type="submit" value="뒤로가기" id="back">
        </form>
    </div>

    <div class="spotify_form">
        <form id="spotify_form" action="spotify.html" method="get">
            <input type="submit" value="직접 선택해서 추천 받기" id="back">
        </form>
    </div>

    <div class="photo_form">
        <form id="photo_form" action="photolist.html" method="get">
            <input type="submit" value="사진으로 추천 받기" id="back">
        </form>
    </div>

    <h1>사진 추천</h1>

    <form id="playlist_form" action="playlist.html" method="get">
        <input type="submit" value="플레이리스트 생성" id="playlist">
    </form>
</body>


</html>
```

### 3.2 추가내용
사용자의 취향에 맞춰 플레이리스트를 생성해내는 서비스 뿐만 아니라 사진을 기반으로한 플레이리스트 생성 또한 해보고자 한다.
### 3.3 웹페이지 구성

![onealog](/assets/readme/sp1.png)   

![onealog](/assets/readme/sp2.png)   

![onealog](/assets/readme/sp3.png)   


## 4. 실행결과


