import React, { Component } from "react";
import Slider from "react-slick";

// 폰트어썸에서 아이콘을 가져오기위해 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 두가지 종류의 아이콘의 이름이 같을때
// as를 사용해서 이름을 바꿔서 불러올수 있다
import { faEnvelope as fasEnvelope, faAdd, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function SimpleSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    // 배열을 이용하여 map을 사용해 화면에 출력하기 위함
    const pictures = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];

    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings} className="mx-5">
                <div>
                    <img
                        src={require('../img/pic1.jpg')}
                        alt=""
                        width={300}
                    />
                </div>
                <div>
                    <img
                        src={require('../img/pic2.jpg')}
                        alt=""
                        width={300}
                    />
                </div>
                <div>
                    <img
                        src={require('../img/pic3.jpg')}
                        alt=""
                        width={300}
                    />
                </div>

                {
                    pictures.map((pic) => (
                        <div>
                            <img
                                src={require(`../img/${pic}`)}
                                alt=""
                                width={300}
                            />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon
            icon={faChevronRight}
            className={className}
            style={
                {
                    ...style, display: "block", color: "darkgray",
                    width: "40px", height: "40px", right: "10px"
                }
            }
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon
            icon={faChevronLeft}
            className={className}
            style={{
                ...style, display: "block", color: "darkgray",
                width: "40px", height: "40px", left: "10px", zIndex: "10"
            }}
            onClick={onClick}
        />
    );
}
