import { FaArrowRight, FaEdit, FaTrash } from "react-icons/fa";
import { DS_Button, DS_Card, DS_Table } from "../../DS/components";
import { ButtonTypography, H1Typography } from "../../DS/typography";

export function Home() {
    // Dados para a tabela de exemplo
    const tableColumns = [
        { key: 'id', header: 'ID', width: '10%' },
        { key: 'name', header: 'Nome', width: '30%' },
        { key: 'email', header: 'Email', width: '40%' },
        { 
            key: 'actions', 
            header: 'Ações', 
            width: '20%',
            render: (_: unknown, rowData: { id: number }) => (
                <div style={{ display: 'flex', gap: '8px' }}>
                    <DS_Button state="default" style={{ minWidth: '40px', padding: '8px' }}>
                        <FaEdit />
                    </DS_Button>
                    <DS_Button state="outlined" style={{ minWidth: '40px', padding: '8px' }}>
                        <FaTrash />
                    </DS_Button>
                </div>
            )
        }
    ];

    const tableData = [
        { id: 1, name: 'João Silva', email: 'joao.silva@example.com' },
        { id: 2, name: 'Maria Santos', email: 'maria.santos@example.com' },
        { id: 3, name: 'Pedro Oliveira', email: 'pedro.oliveira@example.com' }
    ];

    return (
        <div style={{ 
            padding: "20px", 
            display: "flex", 
            flexDirection: "column", 
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto" 
        }}>
            <H1Typography>GameNow</H1Typography>
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <DS_Card 
                    variant="default" 
                    title="Futebol"
                    image="https://img.olympics.com/images/image/private/t_16-9_320/f_auto/v1538355600/primary/mxu1r2porp8sr8oefroe"
                    footer={
                        <DS_Button
                            state="default"
                            rightIcon={<FaArrowRight />}
                        >
                            Ver mais
                        </DS_Button>
                    }
                >
                    Partida as 15:00<br></br>
                    Valor: R$ 10,00<br></br>
                    5 vagas disponíveis
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

            <div style={{ marginTop: "30px" }}>
                <h2 style={{ marginBottom: "15px" }}>Tabela de Usuários</h2>
                <DS_Table 
                    columns={tableColumns}
                    data={tableData}
                    variant="striped"
                />
            </div>

            <div style={{ marginTop: "30px" }}>
                <h2 style={{ marginBottom: "15px" }}>Tabela de Usuários (Padrão)</h2>
                <DS_Table 
                    columns={tableColumns}
                    data={tableData}
                    variant="default"
                />
            </div>

            <div style={{ marginTop: "30px" }}>
                <h2 style={{ marginBottom: "15px" }}>Tabela Vazia</h2>
                <DS_Table 
                    columns={tableColumns}
                    data={[]}
                    variant="striped"
                    emptyMessage="Nenhum usuário encontrado"
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <ButtonTypography>Componentes do Design System</ButtonTypography>
            </div>
        </div>
    )
}