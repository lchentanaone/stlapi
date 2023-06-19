/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  BaseEntity,
} from 'typeorm';
import { Branch } from '../branch/branch.entity';
import { User } from '../user/user.entity';


@Entity({ name: 'attendant' })
export class Attendant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Branch, (branch) => branch.attendant, { onDelete: 'CASCADE' })
  branch: Branch[];

  @ManyToMany(() => User, (user) => user.attendant, { onDelete: 'CASCADE' })
  user: User[];

  @CreateDateColumn()
  createdAt: Date;
}
