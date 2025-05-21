import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

// Componente da página de Eventos
const Eventos = () => {
  // Estado para armazenar os eventos (simulado por enquanto)
  const [eventos, setEventos] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  
  // Simula carregamento de eventos do Firebase (será implementado posteriormente)
  useEffect(() => {
    // Dados simulados - serão substituídos pela integração com Firebase
    const eventosMock = [
      {
        id: 1,
        titulo: 'Semana da Ciência e Tecnologia',
        tipo: 'academico',
        data: '15 de Junho, 2025',
        horario: '09:00 - 18:00',
        local: 'Auditório Principal',
        capacidade: 300,
        descricao: 'Uma semana inteira dedicada à ciência e tecnologia, com palestras, workshops e exposições de projetos desenvolvidos pelos alunos.',
        imagem: 'https://via.placeholder.com/800x400'
      },
      {
        id: 2,
        titulo: 'Festival Cultural',
        tipo: 'cultural',
        data: '20 de Junho, 2025',
        horario: '14:00 - 22:00',
        local: 'Pátio Central',
        capacidade: 500,
        descricao: 'Festival com apresentações de música, dança, teatro e exposições de arte produzidas pelos alunos e professores.',
        imagem: 'https://via.placeholder.com/800x400'
      },
      {
        id: 3,
        titulo: 'Torneio de Xadrez',
        tipo: 'esportivo',
        data: '10 de Junho, 2025',
        horario: '13:00 - 17:00',
        local: 'Sala de Jogos',
        capacidade: 50,
        descricao: 'Torneio de xadrez aberto a todos os alunos. Haverá premiação para os três primeiros colocados.',
        imagem: 'https://via.placeholder.com/800x400'
      },
      {
        id: 4,
        titulo: 'Palestra sobre Mercado de Trabalho',
        tipo: 'academico',
        data: '5 de Junho, 2025',
        horario: '19:00 - 21:00',
        local: 'Auditório Secundário',
        capacidade: 150,
        descricao: 'Palestra com profissionais do mercado sobre as competências mais valorizadas atualmente e dicas para ingressar no mercado de trabalho.',
        imagem: 'https://via.placeholder.com/800x400'
      },
      {
        id: 5,
        titulo: 'Feira de Profissões',
        tipo: 'academico',
        data: '25 de Junho, 2025',
        horario: '10:00 - 16:00',
        local: 'Ginásio Poliesportivo',
        capacidade: 400,
        descricao: 'Feira com representantes de diversas universidades e cursos técnicos para orientação vocacional dos alunos.',
        imagem: 'https://via.placeholder.com/800x400'
      }
    ];
    
    setEventos(eventosMock);
  }, []);
  
  // Filtra eventos pelo tipo selecionado
  const eventosFiltrados = filtro === 'todos' 
    ? eventos 
    : eventos.filter(evento => evento.tipo === filtro);
  
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <PageHeader>
          <PageTitle><FaCalendarAlt /> Eventos</PageTitle>
          <PageDescription>
            Confira a agenda de eventos, palestras, workshops e atividades culturais.
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
            active={filtro === 'academico'} 
            onClick={() => setFiltro('academico')}
          >
            Acadêmicos
          </FiltroButton>
          <FiltroButton 
            active={filtro === 'cultural'} 
            onClick={() => setFiltro('cultural')}
          >
            Culturais
          </FiltroButton>
          <FiltroButton 
            active={filtro === 'esportivo'} 
            onClick={() => setFiltro('esportivo')}
          >
            Esportivos
          </FiltroButton>
        </FiltrosContainer>
        
        <EventosContainer>
          {eventosFiltrados.length > 0 ? (
            eventosFiltrados.map(evento => (
              <EventoCard key={evento.id}>
                <EventoImagem src={evento.imagem} alt={evento.titulo} />
                <EventoTipo tipo={evento.tipo}>{
                  evento.tipo === 'academico' ? 'Acadêmico' :
                  evento.tipo === 'cultural' ? 'Cultural' : 'Esportivo'
                }</EventoTipo>
                <EventoConteudo>
                  <EventoTitulo>{evento.titulo}</EventoTitulo>
                  <EventoInfo>
                    <EventoInfoItem><FaCalendarAlt /> {evento.data}</EventoInfoItem>
                    <EventoInfoItem><FaClock /> {evento.horario}</EventoInfoItem>
                    <EventoInfoItem><FaMapMarkerAlt /> {evento.local}</EventoInfoItem>
                    <EventoInfoItem><FaUsers /> Capacidade: {evento.capacidade} pessoas</EventoInfoItem>
                  </EventoInfo>
                  <EventoDescricao>{evento.descricao}</EventoDescricao>
                  <EventoBotoes>
                    <EventoLink href={`/evento/${evento.id}`}>Ver detalhes</EventoLink>
                    <EventoInscricao>Inscrever-se</EventoInscricao>
                  </EventoBotoes>
                </EventoConteudo>
              </EventoCard>
            ))
          ) : (
            <MensagemVazia>
              Nenhum evento encontrado para este filtro.
            </MensagemVazia>
          )}
        </EventosContainer>
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
  background-color: ${props => props.active ? '#1a4b8c' : '#f0f5ff'};
  color: ${props => props.active ? 'white' : '#1a4b8c'};
  border: 1px solid #1a4b8c;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#1a4b8c' : '#e0ebff'};
  }
`;

const EventosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EventoCard = styled.article`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const EventoImagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  
  @media (min-width: 768px) {
    width: 300px;
    height: auto;
  }
`;

const EventoTipo = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${props => 
    props.tipo === 'academico' ? '#1a4b8c' : 
    props.tipo === 'cultural' ? '#8c1a4b' : '#4b8c1a'
  };
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const EventoConteudo = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const EventoTitulo = styled.h3`
  font-size: 1.5rem;
  color: #1a4b8c;
  margin-bottom: 1rem;
`;

const EventoInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const EventoInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
`;

const EventoDescricao = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const EventoBotoes = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const EventoLink = styled.a`
  display: inline-block;
  color: #1a4b8c;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #1a4b8c;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f5ff;
  }
`;

const EventoInscricao = styled.button`
  display: inline-block;
  background-color: #1a4b8c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2c5ea0;
  }
`;

const MensagemVazia = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f0f5ff;
  border-radius: 8px;
  color: #1a4b8c;
  font-size: 1.1rem;
`;

export default Eventos;
