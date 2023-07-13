import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from '../entities/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.userCredential({ username: email });
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
    const payload = {
      userPayload: {
        id: user.user.id,
        username: user.user.username,
        password: user.user.password,
        firstName: user.user.first_name,
        middleName: user.user.middle_name,
        lastName: user.user.last_name,
        position: user.user.position,
        status: user.user.status,
        dailyRental: user.user.daily_rental,
        created_at: user.user.created_at,
      },
    };
    return {
      access_token: this.jwtService.sign(payload),
      // store_Id: user.user.store?.id,
      Branch_Id: user.user.branch?.id,

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
