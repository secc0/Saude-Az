declare namespace Express {
  export interface Request {
    user?: {
      id: string;
      companyName: string;
    };
  }
}
