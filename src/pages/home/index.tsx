import { FaArrowRight } from "react-icons/fa";
import { DS_Button, DS_Card } from "../../DS/components";
import { ButtonTypography, H1Typography } from "../../DS/typography";

export function Home() {
    return (
        <div style={{ 
            padding: "20px", 
            display: "flex", 
            flexDirection: "column", 
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto" 
        }}>
            <H1Typography>FIAP Design System</H1Typography>
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <DS_Card 
                    variant="default" 
                    title="Card Padrão"
                    image="https://via.placeholder.com/320x180"
                    footer={
                        <DS_Button
                            state="default"
                            rightIcon={<FaArrowRight />}
                        >
                            Ver mais
                        </DS_Button>
                    }
                >
                    Este é um exemplo de card padrão do nosso Design System.
                    Ele pode ser usado para exibir informações, artigos ou produtos.
                </DS_Card>

                <DS_Card 
                    variant="bordered" 
                    title="Card com Borda"
                    image="https://via.placeholder.com/320x180"
                    footer={
                        <DS_Button
                            state="outlined"
                            rightIcon={<FaArrowRight />}
                        >
                            Explorar
                        </DS_Button>
                    }
                >
                    Este é um exemplo de card com borda do nosso Design System.
                    A variante com borda é útil para destacar conteúdo especial.
                </DS_Card>

                <DS_Card 
                    variant="default" 
                    title="Card Sem Imagem"
                    footer={
                        <DS_Button
                            state="default"
                            rightIcon={<FaArrowRight />}
                        >
                            Detalhes
                        </DS_Button>
                    }
                >
                    Este é um exemplo de card sem imagem, útil para exibir informações
                    ou notificações que não precisam de elementos visuais.
                </DS_Card>
            </div>

            <div style={{ marginTop: "20px" }}>
                <ButtonTypography>Componentes do Design System</ButtonTypography>
            </div>
        </div>
    )
}