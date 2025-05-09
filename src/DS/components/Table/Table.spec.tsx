import {
  describe,
  expect,
  it
} from "vitest"

import {render, screen} from "@testing-library/react"
import { DS_Table } from "."

const mockColumns = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Nome' },
  { key: 'email', header: 'E-mail' }
];

const mockData = [
  { id: 1, name: 'João Silva', email: 'joao@example.com' },
  { id: 2, name: 'Maria Santos', email: 'maria@example.com' }
];

describe("Components/Table", () => {
  it("should render headers correctly", () => {
    render(
      <DS_Table 
        columns={mockColumns} 
        data={mockData} 
        variant="default"
      />
    );

    expect(screen.getByTestId('header-id')).toHaveTextContent('ID');
    expect(screen.getByTestId('header-name')).toHaveTextContent('Nome');
    expect(screen.getByTestId('header-email')).toHaveTextContent('E-mail');
  });

  it("should render data correctly", () => {
    render(
      <DS_Table 
        columns={mockColumns} 
        data={mockData} 
        variant="default"
      />
    );

    expect(screen.getByTestId('cell-0-id')).toHaveTextContent('1');
    expect(screen.getByTestId('cell-0-name')).toHaveTextContent('João Silva');
    expect(screen.getByTestId('cell-0-email')).toHaveTextContent('joao@example.com');
    
    expect(screen.getByTestId('cell-1-id')).toHaveTextContent('2');
    expect(screen.getByTestId('cell-1-name')).toHaveTextContent('Maria Santos');
    expect(screen.getByTestId('cell-1-email')).toHaveTextContent('maria@example.com');
  });

  it("should render empty message when data is empty", () => {
    render(
      <DS_Table 
        columns={mockColumns} 
        data={[]} 
        variant="default"
        emptyMessage="Tabela sem dados"
      />
    );

    expect(screen.getByTestId('empty-message')).toHaveTextContent('Tabela sem dados');
  });

  it("should render loading overlay when isLoading is true", () => {
    render(
      <DS_Table 
        columns={mockColumns} 
        data={mockData} 
        variant="default"
        isLoading
      />
    );

    expect(screen.getByTestId('loading-overlay')).toHaveTextContent('Carregando...');
  });

  it("should render with custom cell renderer", () => {
    const columnsWithRenderer = [
      ...mockColumns,
      { 
        key: 'actions', 
        header: 'Ações',
        render: (_, rowData) => <span data-testid={`action-${rowData.id}`}>Editar</span>
      }
    ];

    render(
      <DS_Table 
        columns={columnsWithRenderer} 
        data={mockData} 
        variant="default"
      />
    );

    expect(screen.getByTestId('action-1')).toHaveTextContent('Editar');
    expect(screen.getByTestId('action-2')).toHaveTextContent('Editar');
  });

  it("should take a snapshot", () => {
    const { asFragment } = render(
      <DS_Table 
        columns={mockColumns} 
        data={mockData} 
        variant="default"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
}); 