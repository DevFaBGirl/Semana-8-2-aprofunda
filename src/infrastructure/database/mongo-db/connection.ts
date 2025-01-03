import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

// Função para conectar ao MongoDB
export const connectDB = async () => {
  try {
    // aqui ele tenta acessar o arquivo .env, se estiver .env.example ele não consegue se conectar com o banco
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDb conectado com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar no MongoDb', error);
  }
};


// Função para desconectar do MongoDB
export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDb desconectado com sucesso!');
  } catch (error) {
    console.log('Erro ao desconectar do MongoDb', error);
  }
};
