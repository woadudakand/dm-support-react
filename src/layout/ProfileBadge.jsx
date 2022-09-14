import React from 'react';
import styled from 'styled-components';
import Heading from '../components/heading/heading';
import { imageUrl } from '../components/utilities/image';

const ProfileWrapper = styled.div`
  .user-dropdwon__info {
    display: flex;
    align-items: flex-start;
    padding: 20px 25px;
    border-radius: 8px;
    margin-bottom: 12px;
    background: ${({ theme }) => theme[theme.mainContent]['general-background']};
    img {
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
    }
    figcaption {
      h1 {
        font-size: 14px;
        margin-bottom: 2px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      p {
        margin-bottom: 0px;
        font-size: 13px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
    }
  }
`;

function ProfileBadge() {
  return (
    <ProfileWrapper>
      <figure className="user-dropdwon__info">
        <img src={imageUrl('static/img/avatar/chat-auth.png')} alt="" />
        <figcaption>
          <Heading as="h5">Danial White</Heading>
          <p>Admin</p>
        </figcaption>
      </figure>
    </ProfileWrapper>
  );
}

export default ProfileBadge;
