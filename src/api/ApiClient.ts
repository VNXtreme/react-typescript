/* eslint-disable global-require */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';
import { saveAs } from 'file-saver';

type QueryObject = {[key: string]: string|number|boolean}

// const domainUrl = 'http://localhost:8080';
const domainUrl = process.env.REACT_APP_API_BASE_URL;
// const validateStatus = (status: number) => status < 500;

export default class ApiClient {
  /**
   * GETリクエスト
   *
   * @param url リクエストURL
   * @param params GETパラメータ
   */
  static async get(
    url: string, params: object, query?: undefined|{[key: string]: string}|string,
  ): Promise<AxiosResponse> {
    let requestUrl = query ? `${url}?${stringify(query)}` : url;
    if (typeof query === 'string') {
      requestUrl = `${url}?${query}`;
    }
    const response = await axios.get(domainUrl + requestUrl, {
      params,
      headers: await this.getHeaders(),
      // validateStatus,
      // @see https://github.com/axios/axios/issues/86#issuecomment-311788525
      data: {},
    });

    return response;
  }

  static async getNoAuth(
    shopCode: string, url: string, params: object, query?: undefined|{[key: string]: string}|string,
  ): Promise<AxiosResponse> {
    let requestUrl = query ? `${url}?${stringify(query)}` : url;
    if (typeof query === 'string') {
      requestUrl = `${url}?${query}`;
    }
    const response = await axios.get(domainUrl + requestUrl, {
      params,
      headers: await this.getHeadersNoAuth('application/x-www-form-urlencoded', shopCode),
      // validateStatus,
      // @see https://github.com/axios/axios/issues/86#issuecomment-311788525
      data: {},
    });

    return response;
  }

  static async getNoAuthV2(
    url: string,
  ): Promise<AxiosResponse> {
    const requestUrl = url;
    const response = await axios.get(domainUrl + requestUrl, {
    });

    return response;
  }

  /**
   * GETリクエスト
   * 自分のドメインのURLにリクエストを投げる
   *
   * @param url リクエストURL
   * @param params GETパラメータ
   */
  static async getOrgDomain(
    url: string, params: object, query?: undefined|{[key: string]: string}|string,
  ): Promise<AxiosResponse> {
    let requestUrl = query ? `${url}?${stringify(query)}` : url;
    if (typeof query === 'string') {
      requestUrl = `${url}?${query}`;
    }
    const response = await axios.get(requestUrl, {
      params,
      headers: await this.getHeaders(),
      // validateStatus,
      // @see https://github.com/axios/axios/issues/86#issuecomment-311788525
      data: {},
    });

    return response;
  }

  /**
   * GETリクエスト
   * 自分のドメインのURLにリクエストを投げる
   *
   * @param url リクエストURL
   * @param params GETパラメータ
   */
  static async getOrgDomain2(
    url: string, params: object, query?: undefined|{[key: string]: string}|string,
  ): Promise<AxiosResponse> {
    let requestUrl = query ? `${url}?${stringify(query)}` : url;
    if (typeof query === 'string') {
      requestUrl = `${url}?${query}`;
    }
    const response = await axios.get(requestUrl, {
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // validateStatus,
      // @see https://github.com/axios/axios/issues/86#issuecomment-311788525
      data: {},
    });

    return response;
  }

  static async getDownloadFile(
    url: string, params: object, query?: undefined|{[key: string]: string}|string,
  ): Promise<AxiosResponse> {
    let requestUrl = query ? `${url}?${stringify(query)}` : url;
    if (typeof query === 'string') {
      requestUrl = `${url}?${query}`;
    }
    const response = await axios.get(domainUrl + requestUrl, {
      params,
      headers: await this.getHeaders(),
      // validateStatus,
      // @see https://github.com/axios/axios/issues/86#issuecomment-311788525
      data: {},
      responseType: 'blob',
    });
    return response;
  }

  /**
   * POSTリクエスト
   *
   * @param url リクエストURL
   * @param params リクエストパラメータ
   */
  static async post(url: string, query: QueryObject, params: any, appendUrl?: string): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}${appendUrl || ''}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders(),
      // validateStatus,
    };

    const param = this.convertToPostData(params, undefined, undefined);
    const response = await axios.post(domainUrl + requestUrl, param, config);
    return response;
  }

  /**
   * POSTリクエスト(ログイン履歴用)
   *
   * @param url リクエストURL
   * @param params リクエストパラメータ
   */
  static async postLoginHistory(url: string, query: QueryObject, params: any, appendUrl?: string): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}${appendUrl || ''}`;

    const config : AxiosRequestConfig = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // validateStatus,
    };

    const param = this.convertToPostData(params, undefined, undefined);
    const response = await axios.post(domainUrl + requestUrl, param, config);
    return response;
  }

  static async postJsonData(url: string, query: QueryObject, params: any): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders('application/json'),
      // validateStatus,
    };

    const response = await axios.post(domainUrl + requestUrl, params, config);
    return response;
  }

  static async putJsonData(url: string, query: QueryObject, params: any): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders('application/json'),
      // validateStatus,
    };

    const response = await axios.put(domainUrl + requestUrl, params, config);
    return response;
  }

  static async postMutipartData(
    url: string, query: QueryObject, params: any,
  ): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders('multipart/form-data'),
      // validateStatus,
    };
    const form = new FormData();
    const param = this.convertToPostData(params, form, undefined);
    const response = await axios.post(domainUrl + requestUrl, param, config);
    return response;
  }

  // static async postMutipartDatastr(
  //   url: string, query: string, params: any,
  // ): Promise<AxiosResponse> {
  //   const requestUrl = `${url}?${query}`;

  //   const config : AxiosRequestConfig = {
  //     headers: await this.getHeaders('multipart/form-data'),
  //     // validateStatus,
  //   };
  //   const form = new FormData();
  //   const param = this.convertToPostData(params, form, undefined);
  //   const response = await axios.post(domainUrl + requestUrl, param, config);
  //   return response;
  // }

  static async postMutipartDataNoAuth(
    url: string, query: QueryObject, params: any, shopCode: string,
  ): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeadersNoAuth('multipart/form-data', shopCode),
      // validateStatus,
    };
    const form = new FormData();
    const param = this.convertToPostData(params, form, undefined);
    const response = await axios.post(domainUrl + requestUrl, param, config);
    return response;
  }

  /**
   * POSTリクエスト
   *
   * @param url リクエストURL
   * @param params リクエストパラメータ
   */
  static async postOriginalData(url: string, query: QueryObject, params: any):
  Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders(),
      // validateStatus,
    };

    const response = await axios.post(domainUrl + requestUrl, params, config);
    return response;
  }

  /**
   * DELETE
   *
   * @param url
   * @param params
   */
  static async delete(url: string, params: any): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(params)}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders(),
      // validateStatus,
    };

    const response = await axios.delete(domainUrl + requestUrl, config);
    return response;
  }

  static async postFile(
    url: string, query: QueryObject, fileKey: string, file: File,
  ): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders(),
      // validateStatus,
    };

    const formData = new FormData();
    formData.append(fileKey, file);
    const response = await axios.post(domainUrl + requestUrl, formData, config);
    return response;
  }

  /**
   * CSVファイルダウンロード
   */
  static async downloadCsv(url: string, query: object, downloadFileName: string) {
    const response = await this.get(url, query, undefined);
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const blob = new Blob([bom, response.data], {
      type: 'text/csv',
    });
    saveAs(blob, downloadFileName);
  }

  static async downloadCsvNoConvert(url: string, query: object, downloadFileName: string) {
    const response = await this.getDownloadFile(url, query, undefined);
    saveAs(response.data, downloadFileName);
  }

  /**
   * CSVファイルダウンロード
   */
  static async downloadOriginalCsv(url: string, query: string|undefined, downloadFileName: string) {
    const response = await this.get(url, {}, query);
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const blob = new Blob([bom, response.data], {
      type: 'text/csv',
    });
    saveAs(blob, downloadFileName);
  }

  static async downloadCsvPost(url: string, query: QueryObject, params: any,
    downloadFileName: string) {
    const requestUrl = `${url}`;
    const response = await this.postDownloadFile(domainUrl + requestUrl, JSON.stringify(params));
    saveAs(response.data, downloadFileName);
  }

  static async postDownloadFile(
    url: string, params: any, query?: undefined|{[key: string]: string}|string,
  ): Promise<AxiosResponse> {
    let requestUrl = query ? `${url}?${stringify(query)}` : url;
    if (typeof query === 'string') {
      requestUrl = `${url}?${query}`;
    }

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders('application/json'),
      responseType: 'blob',
    };
    const response = await axios.post(requestUrl, params, config);
    return response;
  }

  static async downloadExcelPost(url: string, query: QueryObject, params: any,
    downloadFileName: string) {
    const requestUrl = `${url}?${stringify(query)}`;
    const config : AxiosRequestConfig = {
      headers: await this.getHeaders('application/json'),
      responseType: 'blob',
    };
    const response = await axios.post(domainUrl + requestUrl, JSON.stringify(params), config);

    const blob = new Blob([response.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;',
    });
    saveAs(blob, downloadFileName);
    return response;
  }

  /**
   * headersを取得
   */
  private static async getHeaders(contentType : string = 'application/x-www-form-urlencoded') {
    return {
      'Content-Type': contentType,
      authorization: await this.getToken(),
    };
  }

  private static async getHeadersNoAuth(contentType : string = 'application/x-www-form-urlencoded', shopCode: string) {
    return {
      'Content-Type': contentType,
      'x-ymoky-shop-code': shopCode,
    };
  }

  /**
   * accessTokenを取得
   */
  private static async getToken() {
    // const cognitoUser = await Auth.currentAuthenticatedUser();
    // const currentSession = await Auth.currentSession();

    // const accessToken = await currentSession.getAccessToken();
    // const idToken = await currentSession.getIdToken();
    // const refreshToken = await currentSession.getRefreshToken();
    // if (!accessToken || !refreshToken) {
    // if (!idToken) {
    //   window.location.replace('/expire');
    // }

    // refreshTokenの検証
    // cognitoUser.refreshSession(refreshToken, (err: any, session: any) => {
    //   if (err) {
    //     // refreshに失敗したら強制的にエラー画面に飛ばす
    //     // window.location.replace('/expire');
    //   }
    // });

    // return accessToken.getJwtToken();
    // return idToken.getJwtToken();
    return 'token';
  }

  private static convertToPostData(obj: any, form: any, namespace: any) {
    const fd = form || new URLSearchParams();
    let formKey;

    for (const property in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(property)) {
        if (namespace) {
          if (!isNaN(Number(property))) {
            formKey = `${namespace}[${property}]`;
          } else {
            formKey = `${namespace}.${property}`;
          }
        } else {
          formKey = property;
        }

        if (obj[property] instanceof Date) {
          fd.append(formKey, obj[property].toISOString());
        } else if (typeof obj[property] === 'object'
                && !(obj[property] instanceof File)
                && !(obj[property] instanceof Blob)) {
          this.convertToPostData(obj[property], fd, formKey);
        } else {
          fd.append(formKey, obj[property]);
        }
      }
    }
    return fd;
  }
}
