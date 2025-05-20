import React from 'react';
import styled from 'styled-components';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

// Componente principal da página inicial
const Home = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <HeroSection>
          <HeroTitle>Bem-vindo ao UniCEDUP</HeroTitle>
          <HeroSubtitle>Jornal Digital do Grêmio Estudantil</HeroSubtitle>
          <HeroText>
            Seu portal de notícias, eventos e informações sobre a vida acadêmica.
            Fique por dentro de tudo que acontece em nossa instituição.
          </HeroText>
        </HeroSection>
        
        <FeaturedSection>
          <SectionTitle>Destaques</SectionTitle>
          <FeaturedGrid>
            {/* Placeholders para conteúdos em destaque */}
            <FeaturedCard>
              <FeaturedImage src="https://via.placeholder.com/300x200" alt="Destaque 1" />
              <FeaturedTitle>Semana da Ciência e Tecnologia</FeaturedTitle>
              <FeaturedDate>15 de Maio, 2025</FeaturedDate>
              <FeaturedExcerpt>
                Confira a programação completa da Semana da Ciência e Tecnologia que acontecerá no próximo mês.
              </FeaturedExcerpt>
            </FeaturedCard>
            
            <FeaturedCard>
              <FeaturedImage src="https://via.placeholder.com/300x200" alt="Destaque 2" />
              <FeaturedTitle>Novos Laboratórios de Informática</FeaturedTitle>
              <FeaturedDate>10 de Maio, 2025</FeaturedDate>
              <FeaturedExcerpt>
                A instituição inaugurou novos laboratórios de informática com equipamentos de última geração.
              </FeaturedExcerpt>
            </FeaturedCard>
            
            <FeaturedCard>
              <FeaturedImage src="https://via.placeholder.com/300x200" alt="Destaque 3" />
              <FeaturedTitle>Campeonato Interclasses</FeaturedTitle>
              <FeaturedDate>5 de Maio, 2025</FeaturedDate>
              <FeaturedExcerpt>
                Veja os resultados e fotos do Campeonato Interclasses de Futsal que movimentou a instituição.
              </FeaturedExcerpt>
            </FeaturedCard>
          </FeaturedGrid>
        </FeaturedSection>
        
        <SectionsGrid>
          <SectionCard to="/noticias">
            <SectionTitle>Notícias</SectionTitle>
            <SectionText>
              Fique por dentro das últimas notícias e acontecimentos da nossa instituição.
            </SectionText>
          </SectionCard>
          
          <SectionCard to="/eventos">
            <SectionTitle>Eventos</SectionTitle>
            <SectionText>
              Confira a agenda de eventos, palestras, workshops e atividades culturais.
            </SectionText>
          </SectionCard>
          
          <SectionCard to="/galeria">
            <SectionTitle>Galeria</SectionTitle>
            <SectionText>
              Veja fotos e vídeos dos principais momentos e eventos da nossa comunidade acadêmica.
            </SectionText>
          </SectionCard>
          
          <SectionCard to="/avisos">
            <SectionTitle>Avisos</SectionTitle>
            <SectionText>
              Comunicados importantes, prazos e informações relevantes para todos os estudantes.
            </SectionText>
          </SectionCard>
        </SectionsGrid>
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

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 1rem;
  background-color: #f0f5ff;
  border-radius: 8px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #1a4b8c;
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #2c5ea0;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

const FeaturedSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #1a4b8c;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 3px;
    background-color: #3a6eaf;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeaturedCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const FeaturedTitle = styled.h3`
  font-size: 1.2rem;
  padding: 1rem 1rem 0.5rem;
  color: #1a4b8c;
`;

const FeaturedDate = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #666;
  padding: 0 1rem 0.5rem;
`;

const FeaturedExcerpt = styled.p`
  font-size: 0.9rem;
  padding: 0 1rem 1rem;
  color: #333;
`;

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SectionCard = styled.div`
  background-color: #f0f5ff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: #e0ebff;
  }
`;

const SectionText = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

export default Home;
