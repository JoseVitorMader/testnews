import React from 'react';
import styled from 'styled-components';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { FaStar, FaNewspaper, FaCalendarAlt, FaImages } from 'react-icons/fa';

// Componente da página de Destaques
const Destaques = () => {
  // Dados simulados para destaques (serão substituídos pela integração com Firebase)
  const destaquesPrincipais = [
    {
      id: 1,
      titulo: 'Semana da Ciência e Tecnologia',
      tipo: 'evento',
      data: '15 de Junho, 2025',
      resumo: 'Uma semana inteira dedicada à ciência e tecnologia, com palestras, workshops e exposições de projetos desenvolvidos pelos alunos.',
      imagem: 'https://via.placeholder.com/1200x600'
    },
    {
      id: 2,
      titulo: 'Novos Laboratórios de Informática',
      tipo: 'noticia',
      data: '10 de Maio, 2025',
      resumo: 'A instituição inaugurou novos laboratórios de informática com equipamentos de última geração para melhorar a experiência de aprendizado.',
      imagem: 'https://via.placeholder.com/1200x600'
    }
  ];
  
  const destaquesSecundarios = [
    {
      id: 3,
      titulo: 'Campeonato Interclasses',
      tipo: 'evento',
      data: '5 de Maio, 2025',
      resumo: 'Veja os resultados e fotos do Campeonato Interclasses de Futsal que movimentou a instituição.',
      imagem: 'https://via.placeholder.com/600x400'
    },
    {
      id: 4,
      titulo: 'Palestra sobre Mercado de Trabalho',
      tipo: 'evento',
      data: '12 de Maio, 2025',
      resumo: 'Palestra com profissionais do mercado sobre as competências mais valorizadas atualmente.',
      imagem: 'https://via.placeholder.com/600x400'
    },
    {
      id: 5,
      titulo: 'Feira de Profissões',
      tipo: 'evento',
      data: '25 de Junho, 2025',
      resumo: 'Feira com representantes de diversas universidades e cursos técnicos para orientação vocacional dos alunos.',
      imagem: 'https://via.placeholder.com/600x400'
    },
    {
      id: 6,
      titulo: 'Alteração no calendário acadêmico',
      tipo: 'aviso',
      data: '18 de Maio, 2025',
      resumo: 'Informamos que houve alteração nas datas de provas finais do semestre. O novo calendário está disponível no portal do aluno.',
      imagem: 'https://via.placeholder.com/600x400'
    }
  ];
  
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <PageHeader>
          <PageTitle><FaStar /> Destaques</PageTitle>
          <PageDescription>
            Conteúdos em evidência e informações importantes para a comunidade acadêmica.
          </PageDescription>
        </PageHeader>
        
        <DestaquesPrincipais>
          {destaquesPrincipais.map(destaque => (
            <DestaquePrincipal key={destaque.id}>
              <DestaquePrincipalImagem src={destaque.imagem} alt={destaque.titulo} />
              <DestaquePrincipalOverlay>
                <DestaqueTipo tipo={destaque.tipo}>
                  {destaque.tipo === 'evento' ? <FaCalendarAlt /> : 
                   destaque.tipo === 'noticia' ? <FaNewspaper /> : 
                   destaque.tipo === 'galeria' ? <FaImages /> : <FaStar />}
                  {destaque.tipo.charAt(0).toUpperCase() + destaque.tipo.slice(1)}
                </DestaqueTipo>
                <DestaquePrincipalTitulo>{destaque.titulo}</DestaquePrincipalTitulo>
                <DestaquePrincipalData>{destaque.data}</DestaquePrincipalData>
                <DestaquePrincipalResumo>{destaque.resumo}</DestaquePrincipalResumo>
                <DestaquePrincipalLink href={`/${destaque.tipo}/${destaque.id}`}>
                  Ver mais
                </DestaquePrincipalLink>
              </DestaquePrincipalOverlay>
            </DestaquePrincipal>
          ))}
        </DestaquesPrincipais>
        
        <DestaquesSecundariosGrid>
          {destaquesSecundarios.map(destaque => (
            <DestaqueSecundario key={destaque.id}>
              <DestaqueSecundarioImagem src={destaque.imagem} alt={destaque.titulo} />
              <DestaqueTipo tipo={destaque.tipo}>
                {destaque.tipo === 'evento' ? <FaCalendarAlt /> : 
                 destaque.tipo === 'noticia' ? <FaNewspaper /> : 
                 destaque.tipo === 'galeria' ? <FaImages /> : <FaStar />}
                {destaque.tipo.charAt(0).toUpperCase() + destaque.tipo.slice(1)}
              </DestaqueTipo>
              <DestaqueSecundarioConteudo>
                <DestaqueSecundarioTitulo>{destaque.titulo}</DestaqueSecundarioTitulo>
                <DestaqueSecundarioData>{destaque.data}</DestaqueSecundarioData>
                <DestaqueSecundarioResumo>{destaque.resumo}</DestaqueSecundarioResumo>
                <DestaqueSecundarioLink href={`/${destaque.tipo}/${destaque.id}`}>
                  Ver mais
                </DestaqueSecundarioLink>
              </DestaqueSecundarioConteudo>
            </DestaqueSecundario>
          ))}
        </DestaquesSecundariosGrid>
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

const DestaquesPrincipais = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const DestaquePrincipal = styled.article`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  height: 400px;
  flex: 1;
`;

const DestaquePrincipalImagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${DestaquePrincipal}:hover & {
    transform: scale(1.05);
  }
`;

const DestaquePrincipalOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

const DestaqueTipo = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background-color: ${props => 
    props.tipo === 'evento' ? '#1a4b8c' : 
    props.tipo === 'noticia' ? '#2c5ea0' : 
    props.tipo === 'galeria' ? '#3a6eaf' : 
    props.tipo === 'aviso' ? '#ff9800' : '#1a4b8c'
  };
  color: white;
`;

const DestaquePrincipalTitulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const DestaquePrincipalData = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const DestaquePrincipalResumo = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const DestaquePrincipalLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #1a4b8c;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2c5ea0;
  }
`;

const DestaquesSecundariosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const DestaqueSecundario = styled.article`
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

const DestaqueSecundarioImagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const DestaqueSecundarioConteudo = styled.div`
  padding: 1.5rem;
`;

const DestaqueSecundarioTitulo = styled.h3`
  font-size: 1.2rem;
  color: #1a4b8c;
  margin-bottom: 0.5rem;
`;

const DestaqueSecundarioData = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.8rem;
`;

const DestaqueSecundarioResumo = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const DestaqueSecundarioLink = styled.a`
  display: inline-block;
  color: #1a4b8c;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default Destaques;
