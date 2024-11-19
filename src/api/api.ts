import { request } from "./axios";

/**
 * 登录
 * @param params
 */
export function login(data: API.LoginParams) {
  return request<API.Result>({
    method: 'POST',
    url: '/auth/login',
    data,
  });
}

/**
 * 退出
 * @param params
 */
export function logout() {
  return request<API.Result>({
    method: 'POST',
    url: '/auth/logout',
  });
}

/**
 * 获取赛区列表
 * @param params - 查询参数，包括分页信息
 * @returns 包含表格数据和分页信息的Promise
 */
export function getDatasetData(params: API.ListParams) {
  return request<API.PaginatedResponse<any>>({
    method: 'GET',
    url: `/management/zone/zoneList`,
    params,
  });
}
