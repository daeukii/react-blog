import React, { useEffect } from 'react'

export default function KakaoMapComp() {

  const kakao = window.kakao;

  // 카카오자바스크립트에 있어지는 일은 실행되자마자 출력되야하기때문에
  // useEffect에 작성
  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(35.156226, 129.059515),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다 
    const markerPosition  = new kakao.maps.LatLng(35.156226, 129.059515); 

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    const markerPosition2  = new kakao.maps.LatLng(35.154184, 129.059533); 

    // 마커를 생성합니다
    const marker2 = new kakao.maps.Marker({
        position: markerPosition2
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker2.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);   
  },[])

  return (
    <div>
        <h3>지도</h3>
        <div id="map" style={{width:"500px",height:"400px"}}></div>
    </div>
  )
}