import * as jwt from "jsonwebtoken";
export function generateTokens(data: any, secretAccess: any) {
  let token = jwt.sign({ data: data }, secretAccess, { expiresIn: "3h" });
  return { token };
}

export function verifyTokens(token: string, secret: string) {
  let decoded: any = undefined;
  try {
    decoded = jwt.verify(token, secret);
  } catch (err) {
    decoded = "error";
  }
  return decoded;
}
