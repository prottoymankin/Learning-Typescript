interface NetworkUser {
  id: number;
  first_name: string;
  email_address: string;
};

interface CleanUser {
  id: number;
  name: string;
  email: string;
};

class ApiClient <T, R = T> {
  constructor(private baseUrl: string) {};

  async fetch (endpoint: string, transformer?: (data: T) => R): Promise<R> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      const rawData: T = await response.json();

      if (transformer) {
        return transformer(rawData);
      }

      return rawData as unknown as R;
    } catch (error) {
      throw new Error(`Api request to ${endpoint} failed: ${error}`);
    }
  }
}

const executeSync = async () => {
  const simpleClient = new ApiClient<NetworkUser>('https://api.com');
  const data = await simpleClient.fetch('/products');
  console.log(data);

  const userClient = new ApiClient<NetworkUser, CleanUser>('https://api.com');
  const cleanData = await userClient.fetch('/profile/1', (networkData) => {
    return {
      id: networkData.id,
      name: networkData.first_name,
      email: networkData.email_address
    }
  });
  console.log(cleanData)
}