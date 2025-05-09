import { FaArrowRight } from "react-icons/fa";
import { DS_Button } from "../../DS/components";
import { ButtonTypography, H1Typography } from "../../DS/typography";

export function Home() {
    return (

        <div>
            <H1Typography>FIAP</H1Typography>
            <DS_Button
                state="default"
                rightIcon={<FaArrowRight />}
            >
                Entrar
            </DS_Button>
            <ButtonTypography>Olá, mundo!</ButtonTypography>
        </div>
    )
}