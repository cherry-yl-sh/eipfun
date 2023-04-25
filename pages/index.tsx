import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Link, { LinkProps } from 'next/link';
import SearchMain from '../components/SearchMain';
import IntroCard from '../components/IntroCard';
import { EipWayIntro, PartnerType } from '../types/eips';
import { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import { Button, ButtonProps, TextField, TextFieldProps } from '@mui/material';
import EmailSubscribe from '../components/EmailSubscribe';


export default function Home() {
  const [eipsWay, setEipsWay] = useState<EipWayIntro[]>(introList);
  const [partners, setPartners] = useState<PartnerType[]>(partnerList);
  const EipsBanner = styled('div')(({ theme }) => ({
    width: 1440,
    maxWidth: 1440,
    height: 620,
    backgroundImage: 'url(/images/banner.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '0px auto',
    textAlign: 'center',
    color: '#fff',
    paddingTop: 120,
    position: 'relative',
  }));

  const EipsTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: 52,
    lineHeight: '60px',
    fontWeight: 700,
  }));
  const EipsDesc = styled('h3')(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    color: '#5F6D7E',
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 400,
    marginTop: 20,
  }));
  const EipsLink = styled(Link)<LinkProps>(({ theme }) => ({
    // color: theme.palette.primary.main,
    color: '#437EF7',
    display: 'inline-flex',
    alignItems: 'center',
  }));
  const EipsContent = styled('div')(({ theme }) => ({
    width: 1440,
    margin: '64px auto ',
    textAlign: 'center',
    h3: {
      color: '#272D37',
      fontSize: 32,
      lineHeight: '40px',
      fontWeight: 700,
      letterSpacing: ' -0.02em',
    },
    'p.intro': {
      color: '#5F6D7E',
      fontSize: 16,
      lineHeight: '24px',
      width: 800,
      margin: '10px auto',
    },
  }));
  const EipsCardList = styled('div')(({ theme }) => ({
    width: 1280,
    maxWidth: 1280,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    margin: '60px auto 20px auto',
  }));
  const EipsPartnerList = styled('div')(({ theme }) => ({
    width: 1280,
    maxWidth: 1280,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '60px auto 20px auto',
  }));
  const PartnerCard = styled('div')(({ theme }) => ({
    width: 200,
    maxWidth: 200,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const EipsContentBlock = styled('div')(({ theme }) => ({
    width: 1152,
    maxWidth: 1152,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#F8F9FB',
    borderRadius: 10,
    padding: '40px 64px',
    margin: '40px auto',
    fontWeight: 400,
    h3: {
      fontSize: 32,
      lineHeight: '42px',
      color: '#272D37',
      fontWeight: 600,
    },
    p: {
      fontSize: 16,
      lineHeight: '20px',
      color: '#5F6D7E',
      // margin:'10px 0',
      fontWeight: 400,
      padding: 0,
    },
    '.contentleft': {
      width: 568,
      maxWidth: 568,
      flex: 1,
    },
    '.contentRight': {
      width: 440,
      maxWidth: 440,
      flex: 1,
      textAlign: 'right',
    },
  }));
  

  return (
    <>
      <EipsBanner>
        <EipsTitle variant="h2">We scale EIPs by being the “layer 2”</EipsTitle>
        <EipsTitle variant="h2">
          {' '}
          of <EipsLink href="#">eips.ethereum.org</EipsLink>
        </EipsTitle>

        <EipsDesc>
          EIPs.fun is run by the contributors, for the contributor, and owned by
          the contributors.
        </EipsDesc>
        <SearchMain />
      </EipsBanner>
      <EipsContent>
        <h3>What is EIPs? </h3>
        <p className="intro">
          It is short for Ethereum Improvement Proposals, they are standards for
          the Ethereum platform, including core protocol specifications, client
          APIs, and contract standards.
        </p>
      </EipsContent>
      <EipsContent>
        <h3>How EIPs work?</h3>
        <EipsCardList>
          {eipsWay.length > 0 &&
            eipsWay.map((item) => <IntroCard key={item.title} intro={item} />)}
        </EipsCardList>
      </EipsContent>
      <EipsContent>
        <h3>Supporters and Partners</h3>
        <EipsPartnerList>
          {partners.length > 0 &&
            partnerList.map((item) => (
              <PartnerCard key={item.name}>
                <EipsLink href={item.link}>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={144}
                    height={40}
                  />
                </EipsLink>
              </PartnerCard>
            ))}
        </EipsPartnerList>
      </EipsContent>
      <EipsContentBlock>
        <EmailSubscribe />
      </EipsContentBlock>
      <EipsContentBlock>
        <div className="contentleft">
          <h3>How EIPs Fun works? </h3>
          <p>
            This is an open source and public goods.Running by a EIPs Fun DAO.
            xxx Donation means a lot for us, please donate.
          </p>
        </div>
        <div className="contentRight">
          <Button variant="outlined" size="medium">
            Join Us
          </Button>
          <Button sx={{ marginLeft: 5 }} variant="contained" size="medium">
            Donate
          </Button>
        </div>
      </EipsContentBlock>
    </>
  );
}
const introList = [
  {
    title: 'Write & Submit',
    image: '/images/intro_1.jpg',
    intro: 'Clone the repository, write your idea, commit and push a PR',
    action: 'Propose now',
    index: 1,
    actionLink: '/eips/new',
  },
  {
    title: 'review & feedback',
    image: '/images/intro_2.jpg',
    intro:
      'Once review is done, any editor assigns an EIP number and merges the PR',
    action: '',
    index: 2,
  },
  {
    title: 'Peer Review',
    image: '/images/intro_3.jpg',
    intro: 'The community review and give you feedback',
    action: '',
    index: 3,
  },
  {
    title: 'Last Call',
    image: '/images/intro_4.jpg',
    intro: 'Any editor sets this status with a deadline',
    action: '',
    index: 4,
  },
  {
    title: 'Final',
    image: '/images/intro_5.jpg',
    intro: 'Deadline reached, status auto changes to “Final”',
    action: '',
    index: 5,
  },
];
const partnerList = [
  { name: 'LXDao', logo: '/images/lxdao.svg', link: 'https://lxdao.io' },
  {
    name: 'Plancker',
    logo: '/images/plancker.svg',
    link: 'https://plancker.org/',
  },
  {
    name: 'Plancker1',
    logo: '/images/plancker.svg',
    link: 'https://plancker.org/',
  },
  {
    name: 'Plancker3',
    logo: '/images/plancker.svg',
    link: 'https://plancker.org/',
  },
];