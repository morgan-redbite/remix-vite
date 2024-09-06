'use client';
import styled from "styled-components";
import Mission1 from '../../public/images/Mission_1.png';
import Mission2 from '../../public/images/Mission_2.png';
import Mission3 from '../../public/images/Mission_3.png';
import SocialProof from '../../public/images/social-proof.png';
import Redbite from '../../public/images/partners/redbite-logo.png';
import Camtech from '../../public/images/partners/camtech.png';
import Near from '../../public/images/partners/near.png';
import Itemit from '../../public/images/partners/itemit.png';

import Member1 from '../../public/images/team/Image.png';
import Member2 from '../../public/images/team/Image-1.png';
import Member3 from '../../public/images/team/Image-2.png';
import Member4 from '../../public/images/team/Image-3.png';
import Member5 from '../../public/images/team/Image-4.png';
import Member6 from '../../public/images/team/Image-5.png';
import Member7 from '../../public/images/team/Image-6.png';
import Member8 from '../../public/images/team/Image-7.png';

import Image from 'next/image'

import EnquiryLogo from '../../public/enquiry-logo.png';

const FillPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  color: white;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #35FFEE 0%, #1E76C9 30%, #D400A5 70%, #F79E30 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em; /* Adjust the font size based on your design */
  font-weight: bold; /* Optionally make it bold */
  font-size: 192px;
  letter-spacing: -3px;

  @media (max-width: 768px) {
    font-size: 86px;
  };
`;

const Spacer = styled.div`
  width: 100%;
  min-height: 96px;

  @media (max-width: 768px) {
    min-height: 0px;
  }
`;
const Section = styled.div`
  width: 100%;
  min-height: 840px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 120px;
    span {
      font-size: 26px;
      line-height: 44px;
    }
    #hero-section-description {
      font-size: 18px;
      line-height: 40px;
      max-width: 90%;
    }
  }
`;

const DullText = styled.span`
  color: #6E6E73;
`;

const DullTextV2 = styled.span`
  color: #D8D8D8;
`;

const HeroSection2 = () => {
  return (
    <Section className="gap-4">
      {/* <GradientText>umin.ai</GradientText> */}
      <span className="font-semibold text-center text-[76px] max-w-[1024px] leading-[90px]">Unified machines, items and arificial intelligence.</span>
      <DullText id='hero-section-description' className="font-normal text-center text-[28px] max-w-[800px] leading-[32px] tracking-[0.2px]">The Web3 item identification and intelligence standards unifying physical objects, machines, humans and robots.</DullText>
    </Section>
  )
}

const AutoHeightSection = styled.div`
  width: 100%;
  height: auto;
  padding: 162.5px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  
  @media (max-width: 768px) {
    span {
      font-size: 36px;
      line-height: 44px;
    }

    #mission-section-description {
      font-size: 18px;
      line-height: 36px;
      max-width: 90%;
    }
  }
`;

const MissionGrid = styled.div`
  margin-top: 97px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  // align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MissionChildGrid = styled.div`
  display: flex;
  width: 100%;
  max-width: 624px;
  min-height: 400px;
  border: 1px solid #222222;
  box-sizing: border-box;
  padding: 30.12px 49px 82.66px 49px;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 30.12px 24px 30.12px 24px;
    #title {
      font-size: 24px;
      line-height: 32px;
    }

    #description {
      font-size: 16px;
      line-height: 28px;
      text-align: start;
    }

    #intelligent-marketplace {
      margin-top: 24px;
    }
  }
`;

const Img = styled.img`
`;

const MissionBaseGrid = styled.div`
  position: relative;
  display: flex;
  max-width: 1280px;
  min-height: 400px;
  border: 1px solid #222222;
  width: 100%;
  align-items: center;
  padding: 0px 49px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0px 24px;
    #title {
      font-size: 24px;
      line-height: 32px;
    }

    #description {
      font-size: 16px;
      line-height: 28px;
      text-align: start;
    }

    #absolute-image {
      z-index: -1;
      opacity: 0.5;
    }
  }
`;
const MissionSection = () => {
  return (
    <AutoHeightSection>
      <div className="flex flex-col gap-4 w-full items-center">
        <span className="font-semibold text-center text-[128px] max-w-[1024px] leading-[128px]">The Mission</span>
        <DullText id='mission-section-description' className="font-normal text-center text-[28px] max-w-[800px] leading-[32px] tracking-[0.2px]">
          Our foundation harnesses blockchain technology to enable trustless, permissionless, decentralised & distributed solutions across diverse global industries.
        </DullText>
      </div>

      <MissionGrid>
        <MissionChildGrid>
          <Image src={Mission1} alt="mission-1" />
          <div className="flex flex-col text-start gap-3">
            <div className="max-w-[335px] h-[72px]">
              <span id='title' className="text-[33.82px] font-semibold leading-[38.5px] tracking-[0.37px]">Decentralised Auto-ID Platform</span>
            </div>
            <DullTextV2 id='description' className="text-[16px] text-justify max-w-[500px] leading-[26px]">
              Decentralise existing physical item identification systems using blockchain to democratise and increase accessibility of product and resource identification worldwide.
            </DullTextV2>
          </div>
        </MissionChildGrid>
        <MissionChildGrid>
        <Image src={Mission2} alt="mission-2" />
          <div id='intelligent-marketplace' className="flex flex-col text-start gap-3">
            <div className="h-[72px]">
              <span id='title' className="text-[33.82px] font-semibold leading-[38.5px] tracking-[0.37px]">Intelligence Marketplace</span>
            </div>
            <DullTextV2 id='description' className="text-[16px] text-justify max-w-[500px] leading-[26px]">
              Create a revenue-generating marketplace where apps, AI, robots, and machines can acquire new authenticated knowledge and intelligence from v and manufacturers.
            </DullTextV2>
          </div>
        </MissionChildGrid>
      </MissionGrid>
      <MissionBaseGrid className="mt-8">
        <div className="flex flex-col text-start gap-3">
          <div className="h-[72px]">
            <span id='title' className="text-[33.82px] font-semibold leading-[38.5px] tracking-[0.37px]">Social Network of AI Entities</span>
          </div>
          <DullTextV2 id='description' className="text-[16px] max-w-[500px] leading-[26px]">
            Ensure intelligent item, AI, robot and machinery cross-communications are immutable and secure, creating transparency and tamper-proof interactions that humans can trust.
          </DullTextV2>
        </div>
        <div id='absolute-image' className="absolute w-full h-full flex justify-end items-end">
          <Image src={Mission3} alt="mission-3" />
        </div>
      </MissionBaseGrid>
    </AutoHeightSection>
  )
}

const SocialProofSection = styled.div`
  width: 100%;
  min-height: 981px;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  position: relative;
  z-index: 9999;
  background: #000000;
  // padding: 228px 0px 0px 0px;
  // justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0px 24px;
    min-height: unset;

    #about-wrapper {
      padding-top: 108px;

      #about {
        font-size: 20px;
      }

      #about-gradient {
        font-size: 19px;
      }
    }


    #absolute-image {
      position: relative;
      width: unset;
      z-index: -1;
      padding-top: 0px;
      margin-top: -60px;
      background: #000000;
      img {
        // max-width: 500px;
      }
    }
  }
`;

const GradientTextV2 = styled.span`
  background: linear-gradient(90deg, #35FFEE 0%, #1E76C9 30%, #D400A5 70%, #F79E30 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  font-weight: bold;
`;

const PartnersBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  // align-self: end;

  @media (max-width: 768px) {
    padding-top: 108px;
    padding-bottom: 48px;
    span {
      font-size: 28px;
    }
  }
`;

const PartnersGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;


const SocialProofHero = () => {

  return (
    <SocialProofSection id="social-proof">
      <div id='about-wrapper' className="flex flex-col gap-[24px] items-center pt-[228px]">
        <span id='about' className="font-medium text-center text-[36px] max-w-[1156px] leading-[44px] tracking-[-2%]">
          umin.ai <GradientTextV2 id='about-gradient'>bridges the gap</GradientTextV2> between AI-based decision making and the reality of the physical world with a standardised, decentralised item identification system.
        </span>
        <DullText style={{ color: "#94969C" }} className="font-normal text-[20px]">- Prof Duncan McFarlane</DullText>
      </div>

      <div id='absolute-image' className="absolute flex w-full justify-center items-center pt-[98px]">
        <Image className="z-[-1]" src={SocialProof} alt="social" />
      </div>

      <PartnersBox className="pt-[297px]">
        <span style={{ color: "#CECFD2" }} className="font-normal text-center text-[20px] leading-[30px]">Our Partners</span>
        <PartnersGrid>
          <Image src={Redbite} alt="redbite" />
          <Image src={Camtech} alt="camtech" />
          <Image src={Near} alt="near-protocol" />
          <Image src={Itemit} alt="itemit" />
        </PartnersGrid>
      </PartnersBox>
    </SocialProofSection>
  )
}

const TeamSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 9999;
  background: #000000;
  align-items: center;
  padding: 96px 0px;
`;

const GradientTextV3 = styled.span`
  background: linear-gradient(90deg, #35FFEE 0%, #1E76C9 30%, #D400A5 70%, #F79E30 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
  font-weight: bold;
`;

const TeamMemberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  gap: 32px;
  width: 100%;
  // align-items: center;
  justify-content: center;
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  align-items: start;

  #member-name {
    font-size: 20px;
    font-weight: semibold;
    line-height: 30px;
  }

  #member-position {
    font-size: 18px;
    font-weight: normal;
    line-height: 28px;
    color: #CECFD2;
  }

  #member-info {
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    color: #94969C;
    text-align: start;
  }
`;

const OurTeamSection = () => {
  return (
    <TeamSection>
      <div className="flex flex-col gap-[12px]">
        <DullText style={{ color: "#94969C" }} className="font-normal text-[20px]">Our Team</DullText>
        <span className="font-semibold text-[48px] leading-[60px] tracking-[-2%]">Meet the makers behind <GradientTextV3>umin.ai</GradientTextV3></span>
      </div>
      <DullText style={{ color: "#94969C" }} className="font-normal text-[20px] max-w-[768px] pt-[24px]">
        Our team consists of the original architect of RFID, EPC Network and IoT standards. We are redefining Internet-of-Things to Intelligence-of-Things.
      </DullText>

      <TeamMemberGrid className="pt-[160px]">
        <MemberCard>
          <Image src={Member1} alt="Dr Alex Wong"/>
          <MemberInfo>
            <span id="member-name">Dr. Alex Wong</span>
            <span id="member-position">Co-Founder</span>
            <span id="member-info">CEO and Co-Founder of RedBite Solutions Ltd.</span>
          </MemberInfo>
        </MemberCard>

        <MemberCard>
          <Image src={Member2} alt="Prof. Duncan McFarlane" />
          <MemberInfo>
            <span id="member-name">Prof. Duncan McFarlane</span>
            <span id="member-position">Chairman & Co-Founder</span>
            <span id="member-info">Director of RedBite. Professor of Industrial Information Engineering at University of Cambridge</span>
          </MemberInfo>
        </MemberCard>

        <MemberCard>
          <Image src={Member3} alt="Charlotte Ellarby" />
          <MemberInfo>
            <span id="member-name">Charlotte Ellarby</span>
            <span id="member-position">Co-Founder</span>
            <span id="member-info">Associate Director and Co-Founder of itemit at RedBite Solutions</span>
          </MemberInfo>
        </MemberCard>

        <MemberCard>
          <Image src={Member4} alt="Morgan Lee" />
          <MemberInfo>
            <span id="member-name">Morgan Lee</span>
            <span id="member-position">Developer</span>
            <span id="member-info">Full-stack Web3 Developer at Redbite</span>
          </MemberInfo>
        </MemberCard>
      </TeamMemberGrid>

      {/* Second Row */}
      <TeamMemberGrid className="pt-[48px]">
        <MemberCard>
          <Image src={Member5} alt="Kevin Ashton" />
          <MemberInfo>
            <span id="member-name">Kevin Ashton</span>
            <span id="member-position">Advisorr</span>
            <span id="member-info">Coined IoT (TBD)</span>
          </MemberInfo>
        </MemberCard>

        <MemberCard>
          <Image src={Member6} alt="Meng Han" />
          <MemberInfo>
            <span id="member-name">Meng Han</span>
            <span id="member-position">Investor</span>
            <span id="member-info">CEO of Camtech</span>
          </MemberInfo>
        </MemberCard>

        <MemberCard>
          <Image src={Member7} alt="Flex Yang" />
          <MemberInfo>
            <span id="member-name">Flex Yang</span>
            <span id="member-position">Finance</span>
            <span id="member-info">CEO of Hope / Babel Finance</span>
          </MemberInfo>
        </MemberCard>

        <MemberCard>
          <Image src={Member8} alt="Sanjey Srma" />
          <MemberInfo>
            <span id="member-name">Sanjay Srma</span>
            <span id="member-position">Advisor</span>
            <span id="member-info">MIT Professor (TBD)</span>
          </MemberInfo>
        </MemberCard>
      </TeamMemberGrid>

    </TeamSection>
  )
}

const EnquirySection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 96px 24px;

    #call-to-action-wrapper {
      gap: 8px;
    }
    #call-to-action-text {
      font-size: 26px;
    }

    #image-wrapper {
      padding-top: 48px;
      #image {
        max-width: 280px;
      }
    }
  }
`;

const GradientTextV4 = styled.span`
  background: linear-gradient(90deg, #35FFEE 0%, #1E76C9 30%, #D400A5 70%, #F79E30 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-weight: bold;
`;
const Enquiry = () => {
  return (
    <EnquirySection className="py-[96px] px-[200px]">
      <div id='call-to-action-wrapper' className="flex flex-col items-start gap-8">
        <span id='call-to-action-text' className="font-semibold text-[48px] leading-[60px]">Have questions?</span>
        <span style={{ color: '#94969C' }} className="font-normal text-[20px] leading-[30px]">
          Reach out to us at {' '}
          <GradientTextV4 onClick={() => window.location.href = "mailto:hello@umin.ai"}>hello@umin.ai</GradientTextV4>
        </span>
      </div>
      <div id="image-wrapper">
        <Image id='image' className="max-w-[398px]" src={EnquiryLogo} alt="enquiry-uminai" />
      </div>
    </EnquirySection>
  )
}

const CallToActionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 0px 128px 0px;

  @media (max-width: 768px) {
    padding: 20px 24px 40px 24px;
    #main {
      font-size: 20px;
      line-height: 44px;
    }
  }
`;

const EnterEmailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const StyledInputForEmail = styled.input`
  // max-width: 345px;
  width: 345px;
  height: 48px;
  background: transparent;
  border: 1px solid #333741;
  border-radius: 8px;
  padding: 0px 14px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledButtonGradient = styled.button`
  background: linear-gradient(90deg, #00B5FC 0%, #CD48FC 47%, #F79E2F 100%);
  border-radius: 8px;
  min-width: 119px;
  color: white;
  font-weight: semibold;
  font-size: 16px;
  border: none;
`;

const CallToAction = () => {
  return (
    <CallToActionSection>
      <div className="flex flex-col gap-[20px]">
        <span id='main' className="font-semibold text-[36px] leading-[44px] tracking-[-%2]">Join the revolution - sign up now!</span>
        <span style={{ color: "#94969C" }} className="font-normal text-[20px] leading-[30px]">Stay updated and be the first to know about our launch!</span>
      </div>
      <EnterEmailWrapper className="pt-[32px]">
        <StyledInputForEmail placeholder="Enter your email"/>
        <StyledButtonGradient>Subscribe</StyledButtonGradient>
      </EnterEmailWrapper>
    </CallToActionSection>
  )
}

const HeaderSection = styled.div`
  width: 100%;
  min-height: 840px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 680px;
  }
`;

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 80px;

  @media (max-width: 768px) {
    padding: 24px 24px;
  }
`;
const Footer = () => {
  return (
    <FooterSection>
      <span style={{ color: "#94969C" }} className="font-normal text-[16px] leading-[24px]">© 2024 umin.ai. All rights reserved.</span>
    </FooterSection>
  )
}

export default function Home() {
  return (
    <FillPage>
      <Spacer />
      <HeaderSection id='section-header'>
        <GradientText>umin.ai</GradientText>
      </HeaderSection>

      <HeroSection2 />

      <MissionSection />

      <SocialProofHero />

      {/* <OurTeamSection /> */}

      <Enquiry />

      <CallToAction />
      <Footer />
    </FillPage>
  );
}



