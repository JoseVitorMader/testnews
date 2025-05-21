import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { FaImages, FaSearch } from 'react-icons/fa';

// Componente da página de Galeria
const Galeria = () => {
  // Estado para armazenar as imagens (simulado por enquanto)
  const [imagens, setImagens] = useState([
    {
      id: 1,
      titulo: 'Semana da Ciência e Tecnologia',
      categoria: 'Eventos Acadêmicos',
      data: 'Maio, 2025',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      id: 2,
      titulo: 'Campeonato Interclasses',
      categoria: 'Esportes',
      data: 'Abril, 2025',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      id: 3,
      titulo: 'Festival Cultural',
      categoria: 'Cultura',
      data: 'Março, 2025',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      id: 4,
      titulo: 'Visita Técnica',
      categoria: 'Eventos Acadêmicos',
      data: 'Março, 2025',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      id: 5,
      titulo: 'Formatura 2024',
      categoria: 'Institucional',
      data: 'Dezembro, 2024',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      id: 6,
      titulo: 'Feira de Ciências',
      categoria: 'Eventos Acadêmicos',
      data: 'Novembro, 2024',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      id: 7,
      titulo: 'Gincana Escolar',
      categoria: 'Eventos',
      data: 'Outubro, 2024',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      id: 8,
      titulo: 'Palestra sobre Meio Ambiente',
      categoria: 'Eventos Acadêmicos',
      data: 'Setembro, 2024',
      url: 'https://via.placeholder.com/400x300'
    }
  ]);
  
  const [filtro, setFiltro] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  
  // Lista de categorias únicas
  const categorias = ['Todas', ...new Set(imagens.map(img => img.categoria))];
  
  // Filtra imagens por categoria e termo de busca
  const imagensFiltradas = imagens
    .filter(img => categoriaAtiva === 'Todas' || img.categoria === categoriaAtiva)
    .filter(img => 
      filtro === '' || 
      img.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      img.categoria.toLowerCase().includes(filtro.toLowerCase())
    );
  
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <PageHeader>
          <PageTitle><FaImages /> Galeria</PageTitle>
          <PageDescription>
            Veja fotos e imagens dos principais momentos e eventos da nossa comunidade acadêmica.
          </PageDescription>
        </PageHeader>
        
        <FiltrosContainer>
          <BuscaContainer>
            <BuscaInput 
              type="text" 
              placeholder="Buscar imagens..." 
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
            <BuscaIcone><FaSearch /></BuscaIcone>
          </BuscaContainer>
          
          <CategoriasContainer>
            {categorias.map(categoria => (
              <CategoriaButton 
                key={categoria}
                active={categoriaAtiva === categoria}
                onClick={() => setCategoriaAtiva(categoria)}
              >
                {categoria}
              </CategoriaButton>
            ))}
          </CategoriasContainer>
        </FiltrosContainer>
        
        {imagensFiltradas.length > 0 ? (
          <GaleriaGrid>
            {imagensFiltradas.map(imagem => (
              <ImagemCard key={imagem.id}>
                <ImagemContainer>
                  <Imagem src={imagem.url} alt={imagem.titulo} />
                </ImagemContainer>
                <ImagemInfo>
                  <ImagemTitulo>{imagem.titulo}</ImagemTitulo>
                  <ImagemMetadata>
                    <ImagemCategoria>{imagem.categoria}</ImagemCategoria>
                    <ImagemData>{imagem.data}</ImagemData>
                  </ImagemMetadata>
                </ImagemInfo>
              </ImagemCard>
            ))}
          </GaleriaGrid>
        ) : (
          <MensagemVazia>
            Nenhuma imagem encontrada para os filtros selecionados.
          </MensagemVazia>
        )}
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
  margin-bottom: 2rem;
`;

const BuscaContainer = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto 1.5rem;
`;

const BuscaInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #1a4b8c;
    box-shadow: 0 0 0 2px rgba(26, 75, 140, 0.2);
  }
`;

const BuscaIcone = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const CategoriasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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

const GaleriaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ImagemCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImagemContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
`;

const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ImagemCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImagemInfo = styled.div`
  padding: 1rem;
`;

const ImagemTitulo = styled.h3`
  font-size: 1.1rem;
  color: #1a4b8c;
  margin-bottom: 0.5rem;
`;

const ImagemMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #666;
`;

const ImagemCategoria = styled.span``;

const ImagemData = styled.span``;

const MensagemVazia = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f0f5ff;
  border-radius: 8px;
  color: #1a4b8c;
  font-size: 1.1rem;
`;

export default Galeria;
