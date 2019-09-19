import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

import { Title, Paragraph } from "./styled"

const CertificateBox = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const NewTitle = styled(Title)`
    text-align: center;
    padding: 1rem 0 0 0;
    margin: 1rem 0 1rem 0;
    border-top: 2px dashed rgba(50, 50, 50, 0.2);
`

const Certificate = styled.div`
    margin: 1rem 0;
    width: 48%;
`

export default ({ data }) => {
    return (
        <div>
            <NewTitle>
                Kỹ năng mềm của tui{" "}
                <span role="img" aria-label="feel-crazy">
                    😝
                </span>
            </NewTitle>
            <Paragraph>
                Ngoài việc học lập trình ra mình còn học bồi dưỡng thêm về các
                kỹ năng mềm. Nó giúp cải thiện chất lượng công việc và cuộc sống
                của mình đáng kể. Mình đã được nhận một số chứng chỉ và vẫn đang
                tiếp tục rèn luyện để hoàn thiện thêm bản thân từng ngày!
            </Paragraph>
            <CertificateBox>
                <Certificate>
                    <Image fluid={data.time_manage_certificate.img.fluid} />
                </Certificate>
                <Certificate>
                    <Image fluid={data.time_manage_certificate.img.fluid} />
                </Certificate>
            </CertificateBox>
        </div>
    )
}
