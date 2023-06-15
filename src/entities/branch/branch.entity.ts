import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  BaseEntity,
  JoinTable,
} from 'typeorm';
import { Attendant } from '../attendant/attendant.entity';

@Entity({ name: 'branch' })
export class Branch extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  branch_code: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToMany(() => Attendant, (attendant) => attendant.branch)
  @JoinTable()
  attendant: Attendant[];

  @CreateDateColumn()
  createdAt: Date;
}
