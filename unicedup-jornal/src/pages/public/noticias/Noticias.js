import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { FaNewspaper, FaCalendarAlt, FaUserEdit } from 'react-icons/fa';

// Componente da página de Notícias
const Noticias = () => {
  // Estado para armazenar as notícias (simulado por enquanto)
  const [noticias, setNoticias] = useState([]);
  const [categorias, setCategorias] = useState(['Geral', 'Acadêmico', 'Esportes', 'Cultura', 'Tecnologia']);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Geral');
  
  // Simula carregamento de notícias do Firebase (será implementado posteriormente)
  useEffect(() => {
    // Dados simulados - serão substituídos pela integração com Firebase
    const noticiasMock = [
      {
        id: 1,
        titulo: 'Inscrições abertas para o Hackathon de Inovação',
        categoria: 'Tecnologia',
        data: '18 de Maio, 2025',
        autor: 'Equipe de Tecnologia',
        resumo: 'Estão abertas as inscrições para o Hackathon de Inovação que acontecerá no próximo mês. O evento visa promover soluções tecnológicas para problemas reais.',
        imagem: 'https://via.placeholder.com/800x400'
      },
      {
        id: 2,
        titulo: 'Resultados do Campeonato Interclasses',
        categoria: 'Esportes',
        data: '15 de Maio, 2025',
        autor: 'Departamento de Esportes',
        resumo: 'Confira os resultados completos do Campeonato Interclasses que movimentou nossa instituição nas últimas semanas.',
        imagem: 'https://via.placeholder.com/800x400'
      },
      {
        id: 3,
        titulo: 'Palestra sobre Mercado de Trabalho',
        categoria: 'Acadêmico',
        data: '12 de Maio, 2025',
        autor: 'Coordenação Pedagógica',
        resumo: 'Na próxima semana, teremos uma palestra especial sobre o mercado de trabalho e as competências mais valorizadas atualmente.',
        imagem: 'https://via.placeholder.com/800x400'
      },
      {
        id: 4,
        titulo: 'Festival Cultural acontecerá em Junho',
        categoria: 'Cultura',
        data: '10 de Maio, 2025',
        autor: 'Departamento Cultural',
        resumo: 'O Festival Cultural da instituição já tem data marcada. O evento contará com apresentações de música, dança, teatro e exposições de arte.',
        imagem: 'https://via.placeholder.com/800x400'
      },
      {
        id: 5,
        titulo: 'Novos Laboratórios de Informática',
        categoria: 'Geral',
        data: '5 de Maio, 2025',
        autor: 'Direção',
        resumo: 'A instituição inaugurou novos laboratórios de informática com equipamentos de última geração para melhorar a experiência de aprendizado.',
        imagem: 'https://via.placeholder.com/800x400'
      }
    ];
    
    setNoticias(noticiasMock);
  }, []);
  
  // Filtra notícias pela categoria selecionada
  const noticiasFiltradas = categoriaAtiva === 'Geral' 
    ? noticias 
    : noticias.filter(noticia => noticia.categoria === categoriaAtiva);
  
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <PageHeader>
          <PageTitle><FaNewspaper /> Notícias</PageTitle>
          <PageDescription>
            Fique por dentro das últimas notícias e acontecimentos da nossa instituição.
          </PageDescription>
        </PageHeader>
        
        <CategoriasFiltro>
          {categorias.map(categoria => (
            <CategoriaButton 
              key={categoria}
              active={categoriaAtiva === categoria}
              onClick={() => setCategoriaAtiva(categoria)}
            >
              {categoria}
            </CategoriaButton>
          ))}
        </CategoriasFiltro>
        
        <NoticiasGrid>
          {noticiasFiltradas.length > 0 ? (
            noticiasFiltradas.map(noticia => (
              <NoticiaCard key={noticia.id}>
                <NoticiaImagem src={noticia.imagem} alt={noticia.titulo} />
                <NoticiaCategoria>{noticia.categoria}</NoticiaCategoria>
                <NoticiaConteudo>
                  <NoticiaTitulo>{noticia.titulo}</NoticiaTitulo>
                  <NoticiaMetadata>
                    <NoticiaData><FaCalendarAlt /> {noticia.data}</NoticiaData>
                    <NoticiaAutor><FaUserEdit /> {noticia.autor}</NoticiaAutor>
                  </NoticiaMetadata>
                  <NoticiaResumo>{noticia.resumo}</NoticiaResumo>
                  <NoticiaLink href={`/noticia/${noticia.id}`}>Ler mais</NoticiaLink>
                </NoticiaConteudo>
              </NoticiaCard>
            ))
          ) : (
            <MensagemVazia>
              Nenhuma notícia encontrada para esta categoria.
            </MensagemVazia>
          )}
        </NoticiasGrid>
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

const CategoriasFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const CategoriaButton = styled.button`
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

const NoticiasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const NoticiaCard = styled.article`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const NoticiaImagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NoticiaCategoria = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #1a4b8c;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const NoticiaConteudo = styled.div`
  padding: 1.5rem;
`;

const NoticiaTitulo = styled.h3`
  font-size: 1.3rem;
  color: #1a4b8c;
  margin-bottom: 0.5rem;
`;

const NoticiaMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #666;
`;

const NoticiaData = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const NoticiaAutor = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const NoticiaResumo = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const NoticiaLink = styled.a`
  display: inline-block;
  color: #1a4b8c;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MensagemVazia = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background-color: #f0f5ff;
  border-radius: 8px;
  color: #1a4b8c;
  font-size: 1.1rem;
`;

export default Noticias;
