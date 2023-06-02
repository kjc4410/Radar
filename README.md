# Radar
![image](https://github.com/seunghwanly/mobius-docker/assets/87844641/64a14ed3-fa1d-48b8-b2b2-a2f4747ce36a)
<br>
레이더는 파워로직스사의 제품으로 "TSF-P100" 모델을 사용하였고, 물체를 감지하고 움직임이 있을 때 데이터를 전송한다.<br>
레이더 데이터는 아래와 같이 구성된다.
* posX
  + 현재 Target의 x 좌표점으로 10cm단위
* posY
  + 현재 Target의 y 좌표점으로 10cm단위
* posZ
  + 현재 Target의 z 좌표점으로 10cm단위이지만 2D에서의 값은 0이다.
* bpm
  + 사용안함
* hbr
  + 사용안함
* engergy
  + 표적의 운동 에너지량	
  + Target에 대한 Energy값을 표현한 것으로 동적움직임의 크기를 나타낸다. 
  + 0일수 있음

<br>
<br>

레이더 데이터 형식: 
### aa551001020020c300003205000000000000000300010000750255aa<br>
맨 앞 aa55와 맨 뒤 55aa는 레이더 전송 시작 신호인 preamble을 나타낸다.<br>
preamble은 특수한 코드로, 전송된 신호는 대상물체에서 반사되어 돌아오는 신호와 섞이게 되는데 이를 구분하기 위해 추가되는 것이다.

레이더 데이터는 다음과 같은 내용을 포함하고 있음
* cmd: 레이더의 연결 상태를 나타냄
* serial: 레이더 모델의 고유 번호를 나타냄
* sequence
* reserved
* length: 데이터의 길이를 나타냄
* message: 레이더 데이터 상태를 설명한다
* crc: 데이터 전송 중 오류 검출을 위한 것이지만 항목만 존재함
