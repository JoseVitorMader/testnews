/**
 * Arquivo de testes para validar funcionalidades CRUD
 * 
 * Este script contém funções para testar as operações CRUD (Create, Read, Update, Delete)
 * nas diferentes coleções do Firestore.
 */

// Importações necessárias
import { db, storage } from '../services/firebase';
import { 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

/**
 * Testa a criação de um documento no Firestore
 * @param {string} collectionName - Nome da coleção
 * @param {object} data - Dados a serem salvos
 * @returns {Promise<object>} Resultado do teste
 */
export const testCreate = async (collectionName, data) => {
  try {
    console.log(`Testando criação em ${collectionName}:`, data);
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log(`Documento criado com ID: ${docRef.id}`);
    return {
      success: true,
      docId: docRef.id,
      message: `Documento criado com sucesso em ${collectionName}`
    };
  } catch (error) {
    console.error(`Erro ao criar documento em ${collectionName}:`, error);
    return {
      success: false,
      error: error.message,
      message: `Erro ao criar documento em ${collectionName}`
    };
  }
};

/**
 * Testa a leitura de um documento no Firestore
 * @param {string} collectionName - Nome da coleção
 * @param {string} docId - ID do documento
 * @returns {Promise<object>} Resultado do teste
 */
export const testRead = async (collectionName, docId) => {
  try {
    console.log(`Testando leitura em ${collectionName}, ID: ${docId}`);
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log(`Documento encontrado:`, docSnap.data());
      return {
        success: true,
        data: docSnap.data(),
        message: `Documento lido com sucesso de ${collectionName}`
      };
    } else {
      console.log(`Documento não encontrado em ${collectionName}`);
      return {
        success: false,
        message: `Documento não encontrado em ${collectionName}`
      };
    }
  } catch (error) {
    console.error(`Erro ao ler documento de ${collectionName}:`, error);
    return {
      success: false,
      error: error.message,
      message: `Erro ao ler documento de ${collectionName}`
    };
  }
};

/**
 * Testa a atualização de um documento no Firestore
 * @param {string} collectionName - Nome da coleção
 * @param {string} docId - ID do documento
 * @param {object} data - Novos dados
 * @returns {Promise<object>} Resultado do teste
 */
export const testUpdate = async (collectionName, docId, data) => {
  try {
    console.log(`Testando atualização em ${collectionName}, ID: ${docId}`, data);
    const docRef = doc(db, collectionName, docId);
    
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date()
    });
    
    console.log(`Documento atualizado com sucesso`);
    return {
      success: true,
      message: `Documento atualizado com sucesso em ${collectionName}`
    };
  } catch (error) {
    console.error(`Erro ao atualizar documento em ${collectionName}:`, error);
    return {
      success: false,
      error: error.message,
      message: `Erro ao atualizar documento em ${collectionName}`
    };
  }
};

/**
 * Testa a exclusão de um documento no Firestore
 * @param {string} collectionName - Nome da coleção
 * @param {string} docId - ID do documento
 * @returns {Promise<object>} Resultado do teste
 */
export const testDelete = async (collectionName, docId) => {
  try {
    console.log(`Testando exclusão em ${collectionName}, ID: ${docId}`);
    const docRef = doc(db, collectionName, docId);
    
    await deleteDoc(docRef);
    
    console.log(`Documento excluído com sucesso`);
    return {
      success: true,
      message: `Documento excluído com sucesso de ${collectionName}`
    };
  } catch (error) {
    console.error(`Erro ao excluir documento de ${collectionName}:`, error);
    return {
      success: false,
      error: error.message,
      message: `Erro ao excluir documento de ${collectionName}`
    };
  }
};

/**
 * Testa o upload de uma imagem para o Firebase Storage
 * @param {File} file - Arquivo de imagem
 * @param {string} path - Caminho no Storage
 * @returns {Promise<object>} Resultado do teste
 */
export const testImageUpload = async (file, path) => {
  try {
    console.log(`Testando upload de imagem para ${path}`);
    const storageRef = ref(storage, path);
    
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log(`Imagem enviada com sucesso, URL:`, downloadURL);
    return {
      success: true,
      url: downloadURL,
      message: 'Imagem enviada com sucesso'
    };
  } catch (error) {
    console.error('Erro ao enviar imagem:', error);
    return {
      success: false,
      error: error.message,
      message: 'Erro ao enviar imagem'
    };
  }
};

/**
 * Executa todos os testes CRUD para uma coleção
 * @param {string} collectionName - Nome da coleção
 * @param {object} sampleData - Dados de exemplo para teste
 * @param {object} updateData - Dados para atualização
 * @returns {Promise<object>} Resultados dos testes
 */
export const runCRUDTests = async (collectionName, sampleData, updateData) => {
  const results = {
    create: null,
    read: null,
    update: null,
    delete: null
  };
  
  // Teste de criação
  results.create = await testCreate(collectionName, sampleData);
  
  if (results.create.success) {
    const docId = results.create.docId;
    
    // Teste de leitura
    results.read = await testRead(collectionName, docId);
    
    // Teste de atualização
    results.update = await testUpdate(collectionName, docId, updateData);
    
    // Teste de leitura após atualização
    const readAfterUpdate = await testRead(collectionName, docId);
    
    // Teste de exclusão
    results.delete = await testDelete(collectionName, docId);
  }
  
  console.log(`Resultados dos testes CRUD para ${collectionName}:`, results);
  return results;
};

/**
 * Executa testes CRUD em todas as coleções principais
 * @returns {Promise<object>} Resultados de todos os testes
 */
export const runAllCRUDTests = async () => {
  const allResults = {};
  
  // Testes para coleção de notícias
  allResults.noticias = await runCRUDTests(
    'noticias',
    {
      titulo: 'Notícia de Teste',
      categoria: 'Teste',
      resumo: 'Resumo da notícia de teste',
      conteudo: 'Conteúdo completo da notícia de teste',
      autor: 'Testador'
    },
    {
      titulo: 'Notícia de Teste Atualizada',
      resumo: 'Resumo atualizado'
    }
  );
  
  // Testes para coleção de eventos
  allResults.eventos = await runCRUDTests(
    'eventos',
    {
      titulo: 'Evento de Teste',
      tipo: 'academico',
      data: '2025-06-15',
      horario: '14:00 - 18:00',
      local: 'Local de Teste',
      descricao: 'Descrição do evento de teste'
    },
    {
      titulo: 'Evento de Teste Atualizado',
      local: 'Novo Local'
    }
  );
  
  // Testes para coleção de avisos
  allResults.avisos = await runCRUDTests(
    'avisos',
    {
      titulo: 'Aviso de Teste',
      tipo: 'informativo',
      conteudo: 'Conteúdo do aviso de teste',
      autor: 'Testador'
    },
    {
      titulo: 'Aviso de Teste Atualizado',
      tipo: 'importante'
    }
  );
  
  console.log('Resultados de todos os testes CRUD:', allResults);
  return allResults;
};
