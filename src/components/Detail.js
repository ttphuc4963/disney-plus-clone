import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/90042E65529C5A363E3EE4862316D9532C8C57C33724F4DD6C8DEC4450D89491/scale?width=2880&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png"
          alt=""
        />
      </ImageTitle>
      <Control>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Control>
      <SubTitle>Neque porro quisquam est qui dolorem ipsum</SubTitle>
      <Description>
        Mr. Burns goes under cover at the nuclear power plant and becomes
        friends with Homer and the gang.Mr. Burns goes under cover at the
        nuclear power plant and becomes friends with Homer and the gang.Mr.
        Burns goes under cover at the nuclear power plant and becomes friends
        with Homer and the gang.Mr. Burns goes under cover at the nuclear power
        plant and becomes friends with Homer and the gang.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;

  // Mẹo cho image sizing: Cho nó 1 parent container
  // Từ đó cho width: 100%, height 100%, object-fit: cover;
  img {
    height: 100%;
    object-fit: contain;
  }
  margin-top: 60px;
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const PlayButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.54;
  font-size: 18px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 700px;

  //keyword: line-clamp

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
