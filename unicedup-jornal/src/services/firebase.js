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
  apiKey: "AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "unicedup-jornal.firebaseapp.com",
  projectId: "unicedup-jornal",
  storageBucket: "unicedup-jornal.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços do Firebase para uso em toda a aplicação
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
