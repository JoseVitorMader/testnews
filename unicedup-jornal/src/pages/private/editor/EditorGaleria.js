import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import Sidebar from '../../../components/layout/Sidebar';
import { useAuth } from '../../../contexts/AuthContext';
import { FaImages, FaSave, FaImage, FaTimes, FaPlus } from 'react-icons/fa';

// Componente do Editor de Galeria para membros do grêmio
const EditorGaleria = () => {
  const { currentUser } = useAuth();
  
  // Estados para o formulário de imagem
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Eventos Acadêmicos');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [previewImagem, setPreviewImagem] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });
  
  // Lista de categorias disponíveis
  const categorias = [
    'Eventos Acadêmicos',
    'Esportes',
    'Cultura',
    'Institucional',
    'Eventos',
    'Projetos'
  ];
  
  // Função para lidar com a seleção de imagem
  const handleImagemChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImagem(file);
      
      // Cria uma URL para preview da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImagem(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Função para remover a imagem selecionada
  const removerImagem = () => {
    setImagem(null);
    setPreviewImagem('');
  };
  
  // Função para enviar o formulário (simulada por enquanto)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!titulo || !imagem) {
      setMensagem({
        tipo: 'erro',
        texto: 'Por favor, preencha o título e selecione uma imagem.'
      });
      return;
    }
    
    try {
      setEnviando(true);
      
      // Simulação de envio para o Firebase (será implementado posteriormente)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Limpa o formulário após o envio
      setTitulo('');
      setCategoria('Eventos Acadêmicos');
      setDescricao('');
      setImagem(null);
      setPreviewImagem('');
      
      setMensagem({
        tipo: 'sucesso',
        texto: 'Imagem adicionada à galeria com sucesso!'
      });
    } catch (error) {
      setMensagem({
        tipo: 'erro',
        texto: `Erro ao adicionar imagem: ${error.message}`
      });
    } finally {
      setEnviando(false);
    }
  };
  
  return (
    <PageContainer>
      <Header />
      <EditorContainer>
        <Sidebar />
        <MainContent>
          <PageHeader>
            <PageTitle><FaImages /> Editor de Galeria</PageTitle>
            <PageDescription>
              Adicione e gerencie imagens para a galeria do jornal digital UniCEDUP.
            </PageDescription>
          </PageHeader>
          
          {mensagem.texto && (
            <Mensagem tipo={mensagem.tipo}>
              {mensagem.texto}
              <FecharMensagem onClick={() => setMensagem({ tipo: '', texto: '' })}>
                <FaTimes />
              </FecharMensagem>
            </Mensagem>
          )}
          
          <FormContainer onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="imagem">Selecione uma Imagem *</Label>
              {previewImagem ? (
                <ImagemPreviewContainer>
                  <ImagemPreview src={previewImagem} alt="Preview" />
                  <RemoverImagemButton type="button" onClick={removerImagem}>
                    <FaTimes /> Remover
                  </RemoverImagemButton>
                </ImagemPreviewContainer>
              ) : (
                <InputImagemContainer>
                  <InputImagem
                    type="file"
                    id="imagem"
                    accept="image/*"
                    onChange={handleImagemChange}
                    required
                  />
                  <InputImagemLabel htmlFor="imagem">
                    <FaImage /> Selecionar Imagem
                  </InputImagemLabel>
                </InputImagemContainer>
              )}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="titulo">Título da Imagem *</Label>
              <Input
                type="text"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Digite um título para a imagem"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="categoria">Categoria</Label>
              <Select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="descricao">Descrição</Label>
              <TextArea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite uma descrição para a imagem (opcional)"
                rows={4}
              />
            </FormGroup>
            
            <BotoesContainer>
              <BotaoSubmit type="submit" disabled={enviando || !imagem}>
                {enviando ? 'Enviando...' : <><FaSave /> Adicionar à Galeria</>}
              </BotaoSubmit>
            </BotoesContainer>
          </FormContainer>
          
          <GaleriaContainer>
            <GaleriaHeader>
              <h2>Imagens na Galeria</h2>
              <BotaoNovaImagem>
                <FaPlus /> Nova Imagem
              </BotaoNovaImagem>
            </GaleriaHeader>
            
            {/* Lista de imagens será implementada posteriormente com dados do Firebase */}
            <MensagemVazia>
              A galeria de imagens será carregada do Firebase quando a integração for implementada.
            </MensagemVazia>
          </GaleriaContainer>
        </MainContent>
      </EditorContainer>
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

const EditorContainer = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem 1rem 2rem 270px;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  color: #1a4b8c;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PageDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Mensagem = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  background-color: ${props => props.tipo === 'sucesso' ? '#d4edda' : '#f8d7da'};
  color: ${props => props.tipo === 'sucesso' ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.tipo === 'sucesso' ? '#c3e6cb' : '#f5c6cb'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FecharMensagem = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1rem;
`;

const FormContainer = styled.form`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #1a4b8c;
    box-shadow: 0 0 0 2px rgba(26, 75, 140, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #1a4b8c;
    box-shadow: 0 0 0 2px rgba(26, 75, 140, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #1a4b8c;
    box-shadow: 0 0 0 2px rgba(26, 75, 140, 0.2);
  }
`;

const InputImagemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputImagem = styled.input`
  display: none;
`;

const InputImagemLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f0f5ff;
  color: #1a4b8c;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e0ebff;
  }
`;

const ImagemPreviewContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ImagemPreview = styled.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 4px;
`;

const RemoverImagemButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: #d32f2f;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  
  &:hover {
    background-color: white;
  }
`;

const BotoesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const BotaoSubmit = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #1a4b8c;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2c5ea0;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const GaleriaContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const GaleriaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h2 {
    font-size: 1.5rem;
    color: #1a4b8c;
    margin: 0;
  }
`;

const BotaoNovaImagem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #1a4b8c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2c5ea0;
  }
`;

const MensagemVazia = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f0f5ff;
  border-radius: 4px;
  color: #1a4b8c;
`;

export default EditorGaleria;
