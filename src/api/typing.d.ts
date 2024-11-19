declare namespace API {
  /**
 * 普通接口的标准返回格式
 */
  type Result<T = any> = {
    msg: string;
    code: number;
    data: T;
    error?: string;
  };

  /**
   * 分页接口的标准返回格式
   */
  interface PaginatedResponse<T> {
    msg: string;
    status: number;
    data: {
      total: number;
      page: number;
      limit: number;
      areas: T[];
    };

  }

  type LoginParams = {
    username: string;
    password: string;
  };

  type ListParams = {
    page: number;
    pageSize: number;
    keywords: string;
  };
}
