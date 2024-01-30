import styled from 'styled-components';

export const CateItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  // height: 100px;
  height: auto;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export const CateIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background-color: #d2d999;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const CateIcon = styled.img`
  width: 50px;
  height: 50px;
`;
// 여기 아이콘 테스트 해볼려고 키웠엉 수정 하고싶으면 고쳐놔줘

export const CateTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CateText = styled.span`
  font-size: 15px;
  color: #848484;
  text-align: center;
  // font-weight: bold;
`;
