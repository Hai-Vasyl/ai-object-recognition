import { Injectable } from '@nestjs/common';

import { AuthService } from '@/modules/auth/auth.service';
import { RegisterUserDTO } from '@/modules/users/dto/register-user.dto';
import { User } from '@/modules/users/user.entity';
import { JwtTokenResponseDTO } from '@/modules/users/dto/jwt-token-response.dto';
import { UserRepository } from '@/modules/users/user.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {}

  public async login(user: User): Promise<JwtTokenResponseDTO> {
    return this.authService.login(user.id);
  }

  public async register(
    registerUserDTO: RegisterUserDTO,
  ): Promise<JwtTokenResponseDTO> {
    await this.authService.validateRegister(registerUserDTO);

    const password = await this.authService.getHash(registerUserDTO.password);

    const user = await this.userRepository.createUser({
      ...registerUserDTO,
      password,
    });

    return this.authService.login(user.id);
  }
}
