import { User } from '@prisma/client';

// Implementa a interface criada pelo Prisma
export class UserEntity implements User {
  id: number;
  email: string;
  name: string;
  admin: boolean;
  createdAt: Date;
}
