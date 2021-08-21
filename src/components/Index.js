import React from "react";
import {
  Name,
  GreetingText,
  IndexBlock,
  NameText,
  Role,
  Subtitle,
  Bio,
  ProfileImg,
  Location,
  DownloadCVButton,
  SocialTab,
  Social,
} from "./Styled";
import ProfileImage from "../profile_img.jpg";
import SocialMedia from "./socialmedia";

export default function Index() {
  return (
    <>
      <IndexBlock>
        <GreetingText>Hey there !</GreetingText>
        <NameText>
          I'm
          <Name>Subramanian</Name>
        </NameText>
        <Role>React Developer | Graphic Designer</Role>
        <ProfileImg src={ProfileImage} alt="profile_image" />

        <Location>
          <svg
            width="21"
            height="25"
            viewBox="0 0 21 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0543 0C7.38777 0 4.83041 1.05357 2.94485 2.92892C1.05929 4.80428 0 7.34781 0 9.99997C0 16.7499 8.86039 24.3749 9.23743 24.6999C9.46508 24.8936 9.75479 25 10.0543 25C10.3539 25 10.6436 24.8936 10.8713 24.6999C11.3111 24.3749 20.1087 16.7499 20.1087 9.99997C20.1087 7.34781 19.0494 4.80428 17.1638 2.92892C15.2783 1.05357 12.7209 0 10.0543 0V0ZM10.0543 22.0624C7.37738 19.5624 2.51359 14.175 2.51359 9.99997C2.51359 8.01085 3.30806 6.1032 4.72222 4.69668C6.13639 3.29017 8.05441 2.49999 10.0543 2.49999C12.0543 2.49999 13.9723 3.29017 15.3865 4.69668C16.8006 6.1032 17.5951 8.01085 17.5951 9.99997C17.5951 14.175 12.7313 19.5749 10.0543 22.0624ZM10.0543 4.99998C9.06007 4.99998 8.08811 5.29323 7.2614 5.84263C6.43469 6.39204 5.79034 7.17293 5.40984 8.08656C5.02935 9.00018 4.92979 10.0055 5.12377 10.9754C5.31774 11.9453 5.79654 12.8362 6.4996 13.5355C7.20266 14.2348 8.09842 14.711 9.0736 14.9039C10.0488 15.0968 11.0596 14.9978 11.9782 14.6194C12.8968 14.2409 13.6819 13.6001 14.2343 12.7778C14.7867 11.9556 15.0815 10.9889 15.0815 9.99997C15.0815 8.67389 14.5519 7.40212 13.6091 6.46444C12.6663 5.52677 11.3876 4.99998 10.0543 4.99998ZM10.0543 12.5C9.55721 12.5 9.07123 12.3533 8.65787 12.0786C8.24452 11.8039 7.92234 11.4135 7.7321 10.9567C7.54185 10.4999 7.49207 9.99719 7.58906 9.51224C7.68605 9.02729 7.92544 8.58184 8.27697 8.23221C8.62851 7.88258 9.07638 7.64447 9.56397 7.54801C10.0516 7.45155 10.557 7.50106 11.0163 7.69028C11.4756 7.87949 11.8681 8.19993 12.1443 8.61105C12.4205 9.02217 12.5679 9.50552 12.5679 9.99997C12.5679 10.663 12.3031 11.2989 11.8317 11.7677C11.3603 12.2366 10.721 12.5 10.0543 12.5Z"
              fill="black"
            />
          </svg>
          {"    "}
          Tamilnadu, India
        </Location>

        <a href="../assets/files/resume_subramanian_1.pdf" download>
          <DownloadCVButton>Download CV</DownloadCVButton>
        </a>
        <Subtitle>Summary</Subtitle>
        <Bio>
          Proficient in Web Dev technologies, with entry-level experience.
          Front-end Developer who is passionate in creating Open-source
          projects. Intermediate in Python programming, and have a passion for a
          Data Scientist. My open-source projects are under
          'github/subramanian3600'
        </Bio>
        <SocialTab>
          {SocialMedia.map((social) => {
            return (
              <>
                <a
                  key={social.media}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Social width={social.width} height="50">
                    {social.paths.map((p) => {
                      return (
                        <>
                          <path
                            key={p}
                            d={p.d}
                            fill={p.fill}
                            fillRule={p.fillrule}
                            clipRule={p.cliprule}
                          />
                          ;
                        </>
                      );
                    })}
                  </Social>
                </a>
              </>
            );
          })}
        </SocialTab>
      </IndexBlock>
    </>
  );
}
