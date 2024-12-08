// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React and other libraries
import React, { useEffect, useState, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { toast, Toaster } from 'sonner';
import { useLocation } from 'react-router-dom';
import { BiX } from 'react-icons/bi';
import { useSiteBaseUrl } from '../utils/useSiteBaseUrl';

// Internal Components
import { Button, Image } from '../../src/css/SharedStyling';

type NotificationProps = {
  image?: ReactNode;
  /* Title of the notification */
  title?: string;
  /* Description of the notification */
  description?: string;
  /* Optional onClose action for the notification */
  onClose?: () => void;
  /* Custom React component to be passed as the image. */
  overlay?: ReactNode;
  /* Optional onClick event for the notification */
  onClick?: () => void;
  /* Position of the notification */
  position?: 'bottom-right' | 'bottom-left' | 'top-center';
  /* Optional duration of the notification component */
  duration?: number;
};

// Custom Hook
export const useChainNotification = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const location = useLocation();
  const baseURL = useSiteBaseUrl();
  const pathname = baseURL + '/chain';

  const isChainPage = location.pathname?.startsWith(pathname);

  const showNotification = () => {
    const toastId = toast.custom(
      () => (
        <NotificationItem
          title='Vote for Push Devnet'
          description='Governance proposal is live! Vote today to make Push Chain a reality'
          image={
            <Image
              src={
                require(
                  `@site/static/assets/website/illustrations/rewardspoint.png`
                ).default
              }
              srcSet={`${require(`@site/static/assets/website/illustrations/rewardspoint@2x.png`).default} 2x, ${require(`@site/static/assets/website/illustrations/rewardspoint@3x.png`).default} 3x`}
              alt='Image showing BRB Chat is powered by Push Chat'
            />
          }
          position='bottom-left'
          onClick={() => {
            localStorage.setItem('chainNotificationShown', 'true');
            window.open('https://governance.push.org', '_blank');
            toast.dismiss(toastId);
          }}
          onClose={() => {
            localStorage.setItem('chainNotificationShown', 'true');
            toast.dismiss(toastId);
          }}
        />
      ),
      {
        duration: Infinity,
        position: 'bottom-left',
      }
    );
  };

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      const notificationAlreadyShown =
        localStorage.getItem('chainNotificationShown') === 'true';

      if (!notificationAlreadyShown && isChainPage && !hasMounted) {
        showNotification();
        setHasMounted(true);
      } else {
        toast.dismiss();
        setHasMounted(false);
      }
    }
  }, [isChainPage]);
};

export const Notification = () => {
  return <StyledToaster offset={0} visibleToasts={5} />;
};

// Notification Item Component
const NotificationItem: FC<NotificationProps> = ({
  title,
  description,
  onClick,
  onClose,
}) => {
  const handleNotificationClick = () => onClick?.();
  const handleNotificationClose = () => {
    onClose?.();
    toast.dismiss();
  };

  return (
    <NotificationContainer onClick={handleNotificationClick}>
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          handleNotificationClose();
        }}
      >
        <BiX size={20} color='#FFF' />
      </CloseButton>
      <TextContainer>
        <Image
          src={
            require(`@site/static/assets/website/chain/VideoCamera.png`).default
          }
          srcSet={`${require(`@site/static/assets/website/chain/VideoCamera@2x.png`).default} 2x, ${require(`@site/static/assets/website/chain/VideoCamera@3x.png`).default} 3x`}
          alt={`Chain Video Camera`}
        />
        <NotificationTitle>{title}</NotificationTitle>
        <Button
          background='transparent'
          margin='0 auto'
          border='1.5px solid #fff'
          hoverBorder='1.5px solid #fff'
          fontFamily='N27'
        >
          Vote Now
        </Button>
        <NotificationDescription>{description}</NotificationDescription>
      </TextContainer>
    </NotificationContainer>
  );
};

// Notification Container
const NotificationContainer = styled.div`
  position: relative;
  background-color: #000;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 368px;
  width: 320px;
  cursor: pointer;
  box-sizing: border-box;
  font-family: N27;
  overflow: hidden;

  @media (max-width: 425px) {
    width: -webkit-fill-available;
  }

  img {
    width: 72px;
    height: auto;
    margin: 0 auto;
  }
`;

const StyledToaster = styled(Toaster)`
  width: 397px;

  @media (max-width: 425px) {
    width: -webkit-fill-available;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  flex: 1;
  box-sizing: border-box;
  gap: 16px;
`;

const NotificationTitle = styled.span`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 39.6px */
  letter-spacing: -0.72px;
`;

const NotificationDescription = styled.span`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.32px;
  overflow: hidden;
`;

const CloseButton = styled.div`
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  padding: 0px;
  position: absolute;
  right: 8px;
  top: 8px;
`;
