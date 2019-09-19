import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Title, Paragraph } from "./styled"

const AboutMe = styled.div`
    display: flex;

    @media (max-width: 976px) {
        flex-direction: column;
    }
`

const AuthorAva = styled.div`
    width: 12vw;
    height: 12vw;
    overflow: hidden;
    border-radius: 1rem;
    transition: 200ms ease;

    & * {
        margin: 0;
    }

    &:hover {
        border-radius: 50%;
    }

    @media (max-width: 976px) {
        width: 40vw;
        height: 40vw;
        border-radius: 50%;
        display: block;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
`

const AboutBody = styled.div`
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 976px) {
        padding: 0;
    }
`

const Socials = styled.div`
    display: flex;
    display: flex;
    align-items: center;

    @media (max-width: 976px) {
        margin-top: 1rem;
        justify-content: flex-end;
    }
`

const Contact = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: 32px;
    margin-right: 12px;
    color: gray;

    &.facebook:hover {
        color: dodgerblue;
    }

    &.google:hover {
        color: tomato;
    }

    &.phone:hover {
        color: orange;
    }
`

export default ({ data }) => (
    <AboutMe>
        <AuthorAva>
            <Image fluid={data.authorImg.img.fluid} />
        </AuthorAva>
        <AboutBody>
            <Title>Giới thiệu bản thân</Title>
            <Paragraph>
                Mình tên Lư Minh Thông - 30/10/1999
                <br />
                Developer với kinh nghiệm 1 năm lập trình Website. <br />
                Hiện tại mình đang làm nhiều về Frontend với{" "}
                <strong>ReactJS, NextJS và GatsbyJS</strong>.
                <br />
                Đồng thời mình cũng là Co-Founder tại Startup công nghệ{" "}
                <a
                    style={{ color: "inherit" }}
                    href="https://cyberskill.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CyberSkill
                </a>
            </Paragraph>
            <Socials>
                <Contact
                    className="facebook"
                    href="https://fb.com/minhthong.lu.58"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </Contact>
                <Contact
                    className="google"
                    href="mailto:minh-thong.lu@cyberskill.tech"
                >
                    <FontAwesomeIcon icon={faGoogle} />
                </Contact>
                <Contact className="phone" href="tel:0949724740">
                    <FontAwesomeIcon icon={faMobileAlt} />
                </Contact>
            </Socials>
        </AboutBody>
    </AboutMe>
)
