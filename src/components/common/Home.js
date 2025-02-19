import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";
import KakaoMap from "../map/KakaoMap";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";

import main_banner_01 from './imgs/main_banner_01.png';
import main_banner_02 from './imgs/main_banner_02.png';
import main_banner_03 from './imgs/main_banner_03.png';
import body_01_arrow from './imgs/body_01_arrow.png';
import a_192_124 from './imgs/a_192_124.png';
import b_192_124 from './imgs/b_192_124.png';
import c_192_124 from './imgs/c_192_124.png';
import more from './imgs/more.png';
import youtube from './imgs/youtube.png';




// 컨테이너
const Container = styled.div`
  width: 100%;
  max-width: 1920px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 내부 콘텐츠
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//  슬라이드 섹션
const SectionA = styled.div`
  width: 100%;
  
  height: 694px;
`;

const SlidImg = styled.img`
  width: 1920px;
  height: 694px;
  position: relative;
`;
const SlidText = styled.div`
  width: 470px;
  height: 284px;
  display:block;
  position: absolute;
  top: 0px;
  margin-top: 205px;
  margin-left: 99px;
  margin-bottom: 205px;
  .eng{
    margin:0;
    display: block;
    font-weight: Bold;
    font-size: 32px;
    color: #fff;
  }
  .title{
    margin:0;
    display: block;
    font-weight: Bold;
    font-size: 62px;
    line-height: 72px;
    color: #fff;

  }
  .ko{
    margin:0;
    margin-top: 30px;
    display: block;
    font-weight: Medium;
    font-size: 22px;
    line-height: 32px;
    color: #fff;
  }

`


const SectionB = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f9ff;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
`;

const LinkBox = styled.div`
  width: 428px;
  height: 164px;
  background-color: #ffffff;
  display:flex;
  justify-content: center;
  gap:30px;
  padding-top: 20px;
  .title{
    font-weight: Bold;
    font-size: 26px;
    color: #111;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

  }
  .text{
    font-weight: Medium;
    font-size: 12px;
    line-height: 18px;
    color: #a3a3a3;
  }
  
`;

const LinkImg = styled.img`
   margin-top: 8px;
`



const SectionC = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 562px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 80px;
  margin-bottom: 80px;

`;

const BoardBox = styled.div`
  width: 600px;
  height: 562px;
  diplay: flex;
  justify-content: center;
    align-items: start;


`;
const BoardTitle = styled.p`
  font-weight: normal;
  font-size: 34px;
  color: #111;
  margin: 0;
  margin-bottom: 18px;

 
`
const BoardText = styled.p`
  font-weight: Medium;
  font-size: 16px;
  color: #6d6d6d
  line-height:42px;
  margin:0;

`
const BoardTitleBox = styled.div`
  width: 600px;
  height: 92px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
  .titleBox{
    width:600px;
    height:92px;
  }
  .reviewLink{
    width: 80px;
    display: flex;
    justify-content: space-between;  
  }
`

const ReviewLink = styled.span`
  font-weight: Normal;
  font-size: 14px;
  color: #111;
`
const BoardContentBox = styled.div`
  width:596px;
  height:70px;
  margin-top: 40px;
  background-color: #f4f4f4;
`
const BoardContentTitle = styled.p`
  font-weight: Normal;
  font-size:16px;
  color: #111;
  margin:0px;
  padding-top:10px;
`
const BoardContent = styled.p`
  font-weight: Normal;
  font-size:12px;
    margin:0px;
  line-height: 24px;
  color: #868686;

`
const VideoTitle = styled.div`
  width:100%;
  max-width: 1920px;
  diplay: flex;
  justify-content: space-between;
  align-items: start;

`


function Home() {
  const onPlayerReady = (e) => {
    e.target.pauseVideo();
  };

  const opts = {
    width: "640",
    height: "400",
  };

  const settings = {
    dots:  false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
  };

  return (  
    <>

    <Container>
      

        <SectionA>
          <Slider {...settings}>
            <div>
              <SlidImg src={main_banner_01} alt="main_banner_01" />
              <ContentWrapper>
                <SlidText>
                  <p className="eng">
                    Hi, Pet
                    <br />
                    Animal Medical Center
                  </p>
                  <p className="title">동물 의료센터</p>
                  <p className="ko">
                    따뜻한 마음과 전문적인 케어를 함께합니다.
                    <br />
                    365일 24시간 응급진료 및 중환자 케어를 하고 있는
                    <br />
                    2차 동물병원으로 나아가고 있습니다.
                  </p>
                </SlidText>

              </ContentWrapper>
            </div>
            <div>
              <SlidImg src={main_banner_02} alt="main_banner_02" />
              <ContentWrapper>
                <SlidText>
                  <p className="eng">
                    Hi, Pet
                    <br />
                    Animal Medical Center
                  </p>
                  <p className="title">치료 후기</p>
                  <p className="ko">
                    더 오래오래 아프지 않고 보호자와 행복하게 지낼 수 있도록
                    <br />
                    정성 어린 진료, 눈에 보이는 변화!
                    <br />
                    치료케이스 및 후기를 소개합니다.
                  </p>
              </SlidText>
              </ContentWrapper>
            </div>
            <div>
              <SlidImg src={main_banner_03} alt="main_banner_03" />
              <ContentWrapper>
                <SlidText>
                  <p className="eng">
                    Hi, Pet
                    <br />
                    Animal Medical Center
                  </p>
                  <p className="title">예약 시스템</p>
                  <p className="ko">
                    언제 어디서나 간편하게, 24시간 예약 시스템으로
                    <br />
                    각 분야 전문 의료진들이 서로 협력하며
                    <br />
                    365일 24시간 응급진료 및 중환자 케어 시스템을 하고 있습니다.
                  </p>
                </SlidText>
              </ContentWrapper>
            </div>
          </Slider>
        </SectionA>


        <SectionB>
          <LinkBox>
              <div>
                <div className="title">
                  <span>진료과 소개</span>
                  <Link to='/Introduce'>
                  <LinkImg src={body_01_arrow} alt="body_01_arrow" />
                  </Link>
                 </div>
                <div className="text">
                  <p>
                    최고의 실력을 가진 전문인력들로
                    <br/>
                    국내 최고수준의 병원이 되도록
                    <br/>
                    노력하고 있습니다.
                  </p>
                </div>
              </div>            
              <div className="img">
                <img src={a_192_124} alt="a_192_124"></img>
              </div>            
          </LinkBox>
          
          
          <LinkBox>
              <div>
                <div className="title">
                  <span>회원 예약</span>
                  <Link to='/userreserv'>
                  <LinkImg src={body_01_arrow} alt="body_01_arrow" />
                  </Link>
                 </div>
                <div className="text">
                  <p>
                    회원이 본인 예약을 할 경우
                    <br/>
                    로그인 후 본인의 진료예약 및
                    <br/>
                    예약내역을 조회할 수 있습니다.
                  </p>
                </div>
              </div>            
              <div className="img">
                <img src={b_192_124} alt="b_192_124"></img>
              </div>                
          </LinkBox>
          <LinkBox>
              <div>
                <div className="title">
                  <span>비회원 예약</span>
                  <Link to='/nonuserreserv'>
                  <LinkImg src={body_01_arrow} alt="body_01_arrow" />
                  </Link>
                 </div>
                <div className="text">
                  <p>
                    비회원이 본인 예약을 할 경우
                    <br/>
                    이름과 연락처를 남겨주시면
                    <br/>
                    곧 전화를 드려 예약을 도와드립니다.
                  </p>
                </div>
              </div>            
              <div className="img">
                <img src={c_192_124} alt="c_192_124"></img>
              </div>                
          </LinkBox>
        </SectionB>

<ContentWrapper>
        <SectionC>
            <BoardBox>
              <BoardTitleBox>
                <div className="titleBox">  
                  <BoardTitle>진료후기</BoardTitle>

                    <BoardText>직접 치료를 받은 환자가 작성한 생생한 후기</BoardText>
                </div>
                <div className="reviewLink">
                  <Link to='/review'>
                    <ReviewLink>더 보기</ReviewLink>
                  </Link>
                  <Link to='/review'>
                    <img src={more} alt="more"></img>
                  </Link>
                </div>
              </BoardTitleBox>
              <BoardContentBox>
                <BoardContentTitle>강아지 경련 진료 후기</BoardContentTitle>
                <BoardContent>(2/17) 홍길동 보호자님</BoardContent>
              </BoardContentBox>
              <BoardContentBox>
                <BoardContentTitle>강아지 경련 진료 후기</BoardContentTitle>
                <BoardContent>(2/17) 홍길동 보호자님</BoardContent>
              </BoardContentBox>
              <BoardContentBox>
                <BoardContentTitle>강아지 경련 진료 후기</BoardContentTitle>
                <BoardContent>(2/17) 홍길동 보호자님</BoardContent>
              </BoardContentBox>
              <BoardContentBox>
                <BoardContentTitle>강아지 경련 진료 후기</BoardContentTitle>
                <BoardContent>(2/17) 홍길동 보호자님</BoardContent>
              </BoardContentBox>
          </BoardBox>

          <BoardBox>
              <BoardTitleBox>
                <div className="titleBox">  
                  <BoardTitle>공지사항</BoardTitle>

                    <BoardText>병원 내부 업무 및 운영에 관한 안내상항</BoardText>
                </div>
                <div className="reviewLink">
                  <Link to='/review'>
                    <ReviewLink>더 보기</ReviewLink>
                  </Link>
                  <Link to='/review'>
                    <img src={more} alt="more"></img>
                  </Link>
                </div>
              </BoardTitleBox>
              <BoardContentBox>
                <BoardContentTitle>1월 27일(월) 임시공휴일 정상 진료 안내</BoardContentTitle>
                <BoardContent>안녕하십니까?...</BoardContent>
              </BoardContentBox>
              <BoardContentBox>
                <BoardContentTitle>1월 27일(월) 임시공휴일 정상 진료 안내</BoardContentTitle>
                <BoardContent>안녕하십니까?...</BoardContent>
              </BoardContentBox>
              <BoardContentBox>
                <BoardContentTitle>1월 27일(월) 임시공휴일 정상 진료 안내</BoardContentTitle>
                <BoardContent>안녕하십니까?...</BoardContent>
              </BoardContentBox>
              <BoardContentBox>
                <BoardContentTitle>1월 27일(월) 임시공휴일 정상 진료 안내</BoardContentTitle>
                <BoardContent>안녕하십니까?...</BoardContent>
              </BoardContentBox>
          </BoardBox>
          </SectionC>
      </ContentWrapper>


        <VideoTitle>
            <div>
              <p>하이펫, 동물의료센터</p>
              <p>수의사가 알려주는 반려동물 건강상식과 병원 안내영상들이 담겨있는 유튜브 채널</p>
            </div>
            <div>
              <img src={youtube} alt="youtube"></img>
            </div>
        
        </VideoTitle>

      </Container>
      </>
  );
}

export default Home;
