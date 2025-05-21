/**
 * Configuração e inicialização do Firebase
 * 
 * Este arquivo centraliza toda a configuração do Firebase e exporta os serviços
 * necessários para a aplicação (Authentication, Firestore e Storage).
 * 
 * Para usar em produção, substitua os valores de firebaseConfig pelos
 * fornecidos no console do Firebase para seu projeto específico.
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

/**
 * Configuração do Firebase
 * IMPORTANTE: Substitua estes valores pelos fornecidos no console do Firebase
 */
const firebaseConfig = {
 apiKey: "AIzaSyAbKaUVFDUWgFcUZEMomLG5nDicG1SIr8g",
  authDomain: "unicedup.firebaseapp.com",
  databaseURL: "https://unicedup-default-rtdb.firebaseio.com",
  projectId: "unicedup",
  storageBucket: "unicedup.firebasestorage.app",
  messagingSenderId: "877231460681",
  appId: "1:877231460681:web:ae2cd51a6c53793c470a98",
  measurementId: "G-9TNXHNGWRS"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços do Firebase para uso em toda a aplicação
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
