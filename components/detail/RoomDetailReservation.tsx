import React from 'react';
import styled from 'styled-components';
import DatePicker from '../common/DatePicker';
import palette from '../../styles/palette';
import Button from '../common/Button';
import { useSelector } from '../../store';

const Container = styled.div`
  position: sticky;
  top: 128px;
  padding: 24px 24px 16px;
  width: 362px;
  height: fit-content;
  background-color: white;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  border-radius: 12px;

  .room-detail-reservation-info {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  .room-detail-reservation-inputs {
    width: 100%;
    margin-bottom: 16px;
    border: 1px solid ${palette.gray_71};
    border-radius: 8px;

    .room-detail-reservation-date-inputs {
      position: relative;
      display: flex;
      width: 100%;
      height: 56px;
      border-bottom: 1px solid ${palette.gray_71};

      .room-detail-reservation-check-in {
        position: relative;
        width: 50%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 8px 0 0 0;
        label {
          display: block;
          width: 100%;
          height: 100%;
          padding: 10px 12px;
          font-size: 10px;
          font-weight: 600;
          border-radius: 8px 0 0 0;
          cursor: pointer;
          border-right: 1px solid ${palette.gray_71};
          input {
            width: 100%;
            margin-top: 7px;
            padding: 0;
            border: 0;
            outline: none;
          }
        }
      }
      .room-detail-reservation-check-out {
        position: relative;
        width: 50%;
        height: 100%;
        top: 0;
        right: 0;
        border-radius: 8px 0 0 0;
        label {
          display: block;
          width: 100%;
          height: 100%;
          padding: 10px 12px;
          font-size: 10px;
          font-weight: 600;
          border-radius: 0 8px 0 0;
          cursor: pointer;
          input {
            width: 100%;
            margin-top: 7px;
            padding: 0;
            border: 0;
            outline: none;
          }
        }
      }
    }
    .room-detail-reservation-guests-count-wrapper {
      position: relative;
      .room-detail-reservation-guests-count {
        width: 100%;
        height: 56px;
        border-radius: 0 0 8px 8px;
        padding: 10px 12px;
        cursor: pointer;
        span {
          display: block;
          font-size: 10px;
          font-weight: 600;
          margin-bottom: 7px;
        }
        p {
          font-size: 14px;
          color: ${palette.gray_71};
        }
      }
      .room-detail-reservation-guests-popup {
        position: absolute;
        width: 100%;
        top: 60px;
        left: 0;
        padding: 16px;
        background-color: white;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
        cursor: default;

        .room-detail-reservation-guests-info {
          font-size: 14px;
          margin-top: 24px;
          color: ${palette.gray_71};
        }
      }
      .mb-24 {
        margin-bottom: 24px;
      }
    }
  }
  .room-detail-reservation-price-date {
    margin-top: 24px;
    margin-bottom: 16px;
    span {
      float: right;
    }
  }
  .room-detail-reservation-total-price {
    padding-top: 24px;
    border-top: 1px solid ${palette.gray_dd};
    font-size: 16px;
    font-weight: 800;
    span {
      float: right;
    }
  }
`;

const RoomDetailReservation: React.FC = () => {
  const room = useSelector(state => state.room.detail);

  if (!room) {
    return null;
  }
  return (
    <Container>
      <p className="room-detail-reservation-info">
        요금을 확인하려면 날짜를 입력하세요.
      </p>
      <div className="room-detail-reservation-inputs">
        <div className="room-detail-reservation-date-inputs">
          <div className="room-detail-reservation-check-in">
            <label>
              체크인
              <DatePicker
                placeholderText="날짜추가"
                popperPlacement="top-end"
                disabledKeyboardNavigation
                onChange={() => {}}
              />
            </label>
          </div>
          <div className="room-detail-reservation-check-out">
            <label>
              체크아웃
              <DatePicker
                placeholderText="날짜추가"
                popperPlacement="top-end"
                disabledKeyboardNavigation
                onChange={() => {}}
              />
            </label>
          </div>
        </div>
        <div className="room-detail-reservation-guests-count-wrapper">
          <div className="room-detail-reservation-guests-count">
            <span>인원</span>
            <p>게스트 1명</p>
          </div>
        </div>
      </div>
      <Button color={'amaranth'} width="100%" onClick={() => {}}>
        예약하기
      </Button>
    </Container>
  );
};

export default RoomDetailReservation;
