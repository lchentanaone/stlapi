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

  @ManyToMany(() => Branch, (branch) => branch.attendant)
  branch: Branch[];

  @CreateDateColumn()
  createdAt: Date;
  user: any;
}
