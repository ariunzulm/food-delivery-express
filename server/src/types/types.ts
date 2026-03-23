export type TokenType = {
  data: {
    userId: number;
    email: string;
    role: "USER" | "ADMIN";
  };
};
