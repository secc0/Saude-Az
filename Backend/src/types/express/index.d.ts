declare namespace Express {
  export interface Request {
    user?: {
      name: string;
      id: string;
    };
    companyName?: {
      name: string;
    };
  }
}
