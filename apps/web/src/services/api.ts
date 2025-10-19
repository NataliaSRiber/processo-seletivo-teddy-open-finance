import axios from 'axios'
import type { User } from '../types/user';

export const api = axios.create({
  baseURL: 'https://boasorte.teddybackoffice.com.br',
})

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

type UserListResponse = {
  clients: User[];
  currentPage: number;
  totalPages: number;
};

export const userService = {
  getAll: async (page: number = 1, limit: number = 10): Promise<ApiResponse<UserListResponse>> => {
    try {
      const response = await api.get('/users', {
        params: {
          page,
          limit
        }
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar usuários');
    }
  },
  
  create: async (userData: User ): Promise<ApiResponse<User>> => {
    try {
      const response = await api.post('/users', userData);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao criar usuário');
    }
  },

  update: async (userData: User): Promise<ApiResponse<User>> => {
    try {
      const response = await api.patch(`/users/${userData.id}`, userData);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao editar usuário');
    }
  },

  getById: async(id: string): Promise<ApiResponse<User>> => {
    try {
      const response = await api.patch(`/users/${id}`);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar usuário');
    }
  },
    
  delete: async (id: number): Promise<ApiResponse<string>> => {
    try {
      const response = await api.delete(`/users/${id}`);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao deletar usuário');
    }
  }
}
 

