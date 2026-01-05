import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { USER_REPOSITORY } from './application/ports/user.repository.port';
import { InMemoryUserRepository } from './infrastructure/adapters/in-memory-user.repository';
import { UserController } from './presentation/user.controller';
import { GetUserUseCase } from './application/use-cases/get-user.use-case';
import { ListUsesrUseCase } from './application/use-cases/list-users.use-case';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    GetUserUseCase,
    ListUsesrUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: InMemoryUserRepository,
    },
  ],
})
export class UserModule {}
