import { message } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';

const baseURL = '/api';

export const axiosInstance = axios.create({ baseURL });

type Result<T = any> = {
  data: T;
  code: number;
  msg: string;
};

// 从URL中获取userId并注入到请求头中
axiosInstance.interceptors.request.use((config) => {
  console.log('请求头', config.headers);
  if (localStorage.getItem('token')) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export async function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  console.log('请求参数', config);
  return axiosInstance.request<T, Result>(config).then((res: any) => {
    console.log('请求结果', res);
    if (res.headers.get('Authorization')) {
      localStorage.setItem('token', res.headers.get('Authorization') || '');
    }
    if (res.data.error) {
      res.data.code = 500;
      res.data.msg = res.data.error;
      message.error(res.data.error);
      throw new Error(res.data.error);
    }
    if (res.data.code === 200) return res.data;
    else {
      message.error(res.data.msg);
      throw new Error(res.data.msg);
    }
  });
}
