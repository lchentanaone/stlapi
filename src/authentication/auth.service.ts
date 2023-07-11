import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from 'src/entities/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.userCredential({ email: email });
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    console.log(this.login)
    const payload = {
      userPayload: {
        id: user.user.id,
        role: user.user.role,
        username: user.user.username,
        password: user.user.password,
        first_name: user.user.first_name,
        middle_name: user.user.middle_name,
        last_name: user.user.last_name,
        position: user.user.position,
        daily_rental: user.user.daily_rental,
        status: user.user.status,
        created_at: user.user.created_at,
      },
    };
    return {
      access_token: this.jwtService.sign(payload),
      branch_id: user.user.branch?.id,
      attendant_id: user.user.attendant?.id,
    };
  }

  async create(data) {
    data.password = await bcrypt.hash(data.password, 10);
    const response = await this.userService.create(data);
    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
