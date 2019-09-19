import styled from "styled-components"

export const Title = styled.h2`
    font-size: 28px;
    color: dodgerblue;
    margin: 8px 0 10px 0;

    @media (max-width: 976px) {
        text-align: center;
    }
`

export const Paragraph = styled.p`
    font-size: 16px;
    color: #6e6b73;
    font-weight: 400;
    margin: 0;

    @media (max-width: 976px) {
        line-height: 28px;
    }
`
