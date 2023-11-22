# Music Explorer (ME)

## 1. 개요
 음악시장이 더 커져 가는 요즘 다양한 노래들이 계속 만들어지며, 개인의 취향에 부합한 노래라 할 지라도 그 노래를 발견하지 못해 놓치는 경우가 빈번하다.
이번 프로젝트에서는 사용자가 마음에 드는 노래를 더 많이 찾을 수 있도록 개개인마다 입력값을 받아 플레이리스트를 생성하는 서비스를 제공하고자한다.

### 1-1. 프로젝트 배경

- 예로부터 사람들의 삶의 한 부분이 되어왔던만큼, 다양한 음악 장르 및 아티스트들이 계속해서 등장하고 있으먀 이는 현재까지 이어지며 옛날 보다 더 다양하고 많은 음악이 쏟아지고 있다.
- 이러한 음악의 특징때문에 사람들은 자신의 취향에 맞는 노래가 있어도 쉽게 찾지못하는 경우가 허다하다.

### 1-3. 프로젝트의 목표.
- 윗 내용의 문제를 해결하기 위해 여러 음악 스트리밍 사이트에서 다양한 음악추천 프로그램들을 만들어왔다. 그럼에도 불구하고 메인스트림에 대한 큰 의존, 오버스펙트럼 등과 같은 단점은 명확한것이 사실이다.
그래서 이 프로젝트에서는 구체성에 초점을 맞추어 개인이 선호하는 장르, 가수, 여러 세밀한 값들을 받아와 이를 토대로 한 노래 추천 프로그램을 짜보자 한다.

## 2. 활용한 인공지능 API

### 2.1 Music Explorer 서비스에서 사용할 API

#### Spotify API
-Spotify Api는 Spotify사 에서 릴리즈한 api로  access Token을 발급하여 노래 데이터 분석, 사용자 데이터 분석 뿐만 아니라 여러 데이터를 조합해 플레이리스트를 생성 할 수 있다.<br>
예를 들어<br>
![onealog](https://github.com/jangchangjun/ai_api_project/blob/main/img/api1.png)   
위 사진의 코드를 참고하여 토큰을 발급받아<br>
![onealog](img/api3.png)
위 사진처럼 데이터를 받아올 수 있으며,<br>
![onealog](https://github.com/jangchangjun/ai_api_project/blob/main/img/api4.png)   
이와 같이 여러 데이터를 입력받아<br>
![onealog](https://github.com/jangchangjun/ai_api_project/blob/main/img/api4_1.png) 
이러한 추천 음악 데이터를 받아올 수 있다.<br>

### 2.2 API의 입력과 출력 
사용자 노래 추천의 기반이 되는 가수, 장르, 트랙 등의 값 뿐만 아니라 BPM, energy, popularity 등의 세세한 값 또한 입력되어 플레이리스트를 생성해낸다.

## 3. 웹페이지 구성
### 3.1 출력문

 #### 기본 화면
 
 <details><summary>
</summary>

  
![onealog](https://github.com/jangchangjun/ai_api_project/blob/main/img/api1.png)   

</details>

#### 플레이리스트 생성 화면

 <details><summary>
</summary>

![onealog](https://github.com/jangchangjun/ai_api_project/blob/main/img/api2.png)   

</details>

#### 사진기반 추천 플레이리스트

 <details><summary>
</summary>

![onealog](https://github.com/jangchangjun/ai_api_project/blob/main/img/api3.png)   

</details>

### 3.2 추가내용
사용자의 취향에 맞춰 플레이리스트를 생성해내는 서비스 뿐만 아니라 사진을 기반으로한 플레이리스트 생성 또한 해보고자 한다.




## 4. 실행결과


