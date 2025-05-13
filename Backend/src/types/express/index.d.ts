declare namespace Express {
  export interface Request {
    user?: {
      id: string;
    };
    companyName?: {
      name: string;
    };
  }
}
