import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

import { Title, Paragraph } from "./styled"

const NewTitle = styled(Title)`
    text-align: center;
    padding: 1rem 0 0 0;
    margin: 1rem 0 1rem 0;
    border-top: 2px dashed rgba(50, 50, 50, 0.2);
`

const ImageBox = styled.div`
    width: 46%;
    display: block;
    margin: 1rem auto;
`

export default ({ data }) => {
    return (
        <div>
            <NewTitle>
                Tại sao mình tạo ra dotBrain{" "}
                <span role="img" aria-label="weather">
                    🌦
                </span>
            </NewTitle>
            <Paragraph>
                Mình học rất nhiều thứ trên đời... Sẽ có lúc chợt quên đi kiến
                thức! Sẽ thật tuyệt nếu có một không gian cá nhân để lưu trữ lại
                kiến thức và xem lại khi cần? Để khi nhìn lại mình có thể thấy
                là bản thân đã học được bao nhiều điều hay ho... <br />
                Càng tuyệt vời hơn khi mình có thể đăng tải kiến thức mà mình đã
                học và có thể nhanh chóng chia sẻ với bạn bè qua Internet. Cho
                nên mình đã tạo ra <b>dotBrain</b> là vì mục đích này! Học hỏi
                và chia sẻ ❤️
            </Paragraph>
            <ImageBox>
                <Image fluid={data.gatsby_astronaut.img.fluid} />
            </ImageBox>
            <Paragraph>
                <strong>Gatsby</strong> là kiến thức trải nghiệm mới của mình
                bắt đầu vào ngày 17.09.2019. Và mình quyết định dùng nó làm trái
                tim của dotBrain! Đúng vậy... Trang blog mà các bạn đang đọc này
                được dựng lên từ <strong>Gatsby</strong>. Ngay lúc này, tại thời
                điểm đăng tải trang Blog này là tròn 2 ngày mình học về{" "}
                <strong>Gatsby</strong>... Thật tuyệt vời và hi vọng có thể làm
                trang này ngày càng tốt hơn!
            </Paragraph>
        </div>
    )
}
