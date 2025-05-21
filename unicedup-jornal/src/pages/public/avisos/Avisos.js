import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { FaBullhorn, FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';

// Componente da página de Avisos
const Avisos = () => {
  // Estado para armazenar os avisos (simulado por enquanto)
  const [avisos, setAvisos] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  
  // Simula carregamento de avisos do Firebase (será implementado posteriormente)
  useEffect(() => {
    // Dados simulados - serão substituídos pela integração com Firebase
    const avisosMock = [
      {
        id: 1,
        titulo: 'Alteração no calendário acadêmico',
        tipo: 'importante',
        data: '18 de Maio, 2025',
        autor: 'Coordenação Pedagógica',
        conteudo: 'Informamos que houve alteração nas datas de provas finais do semestre. O novo calendário está disponível no portal do aluno.',
      },
      {
        id: 2,
        titulo: 'Manutenção do sistema acadêmico',
        tipo: 'informativo',
        data: '15 de Maio, 2025',
        autor: 'Departamento de TI',
        conteudo: 'O sistema acadêmico ficará indisponível no próximo domingo, das 8h às 12h, para manutenção programada.',
      },
      {
        id: 3,
        titulo: 'Prazo para entrega de trabalhos',
        tipo: 'urgente',
        data: '12 de Maio, 2025',
        autor: 'Coordenação de Curso',
        conteudo: 'Lembramos que o prazo final para entrega dos trabalhos de conclusão de semestre é dia 30/05. Não haverá prorrogação.',
      },
      {
        id: 4,
        titulo: 'Vacinação no campus',
        tipo: 'informativo',
        data: '10 de Maio, 2025',
        autor: 'Departamento de Saúde',
        conteudo: 'Haverá campanha de vacinação contra gripe no campus na próxima semana. Traga seu cartão de vacinação.',
      },
      {
        id: 5,
        titulo: 'Inscrições para monitoria',
        tipo: 'importante',
        data: '5 de Maio, 2025',
        autor: 'Coordenação de Ensino',
        conteudo: 'Estão abertas as inscrições para o programa de monitoria do próximo semestre. Consulte os requisitos no edital.',
      }
    ];
    
    setAvisos(avisosMock);
  }, []);
  
  // Filtra avisos pelo tipo selecionado
  const avisosFiltrados = filtro === 'todos' 
    ? avisos 
    : avisos.filter(aviso => aviso.tipo === filtro);
  
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <PageHeader>
          <PageTitle><FaBullhorn /> Avisos</PageTitle>
          <PageDescription>
            Comunicados importantes, prazos e informações relevantes para todos os estudantes.
          </PageDescription>
        </PageHeader>
        
        <FiltrosContainer>
          <FiltroButton 
            active={filtro === 'todos'} 
            onClick={() => setFiltro('todos')}
          >
            Todos
          </FiltroButton>
          <FiltroButton 
            active={filtro === 'urgente'} 
            onClick={() => setFiltro('urgente')}
            tipo="urgente"
          >
            Urgentes
          </FiltroButton>
          <FiltroButton 
            active={filtro === 'importante'} 
            onClick={() => setFiltro('importante')}
            tipo="importante"
          >
            Importantes
          </FiltroButton>
          <FiltroButton 
            active={filtro === 'informativo'} 
            onClick={() => setFiltro('informativo')}
            tipo="informativo"
          >
            Informativos
          </FiltroButton>
        </FiltrosContainer>
        
        <AvisosContainer>
          {avisosFiltrados.length > 0 ? (
            avisosFiltrados.map(aviso => (
              <AvisoCard key={aviso.id} tipo={aviso.tipo}>
                <AvisoHeader>
                  <AvisoTipo tipo={aviso.tipo}>
                    <FaExclamationCircle />
                    {aviso.tipo === 'urgente' ? 'Urgente' : 
                     aviso.tipo === 'importante' ? 'Importante' : 'Informativo'}
                  </AvisoTipo>
                  <AvisoData><FaCalendarAlt /> {aviso.data}</AvisoData>
                </AvisoHeader>
                <AvisoTitulo>{aviso.titulo}</AvisoTitulo>
                <AvisoAutor>Por: {aviso.autor}</AvisoAutor>
                <AvisoConteudo>{aviso.conteudo}</AvisoConteudo>
              </AvisoCard>
            ))
          ) : (
            <MensagemVazia>
              Nenhum aviso encontrado para este filtro.
            </MensagemVazia>
          )}
        </AvisosContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

// Estilos usando styled-components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #1a4b8c;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
`;

const FiltrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const FiltroButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => {
    if (props.active) {
      return props.tipo === 'urgente' ? '#d32f2f' : 
             props.tipo === 'importante' ? '#ff9800' : 
             props.tipo === 'informativo' ? '#2196f3' : '#1a4b8c';
    }
    return '#f0f5ff';
  }};
  color: ${props => props.active ? 'white' : '#1a4b8c'};
  border: 1px solid ${props => 
    props.tipo === 'urgente' ? '#d32f2f' : 
    props.tipo === 'importante' ? '#ff9800' : 
    props.tipo === 'informativo' ? '#2196f3' : '#1a4b8c'
  };
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => {
      if (props.active) {
        return props.tipo === 'urgente' ? '#d32f2f' : 
               props.tipo === 'importante' ? '#ff9800' : 
               props.tipo === 'informativo' ? '#2196f3' : '#1a4b8c';
      }
      return '#e0ebff';
    }};
  }
`;

const AvisosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AvisoCard = styled.article`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border-left: 5px solid ${props => 
    props.tipo === 'urgente' ? '#d32f2f' : 
    props.tipo === 'importante' ? '#ff9800' : '#2196f3'
  };
  padding: 1.5rem;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const AvisoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AvisoTipo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${props => 
    props.tipo === 'urgente' ? '#d32f2f' : 
    props.tipo === 'importante' ? '#ff9800' : '#2196f3'
  };
`;

const AvisoData = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  color: #666;
`;

const AvisoTitulo = styled.h3`
  font-size: 1.3rem;
  color: #1a4b8c;
  margin-bottom: 0.5rem;
`;

const AvisoAutor = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  font-style: italic;
`;

const AvisoConteudo = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

const MensagemVazia = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f0f5ff;
  border-radius: 8px;
  color: #1a4b8c;
  font-size: 1.1rem;
`;

export default Avisos;
