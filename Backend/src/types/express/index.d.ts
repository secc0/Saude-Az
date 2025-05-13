declare namespace Express {
  export interface Request {
    user?: {
      companyName: string;
      id: string;
    };
  }
}
