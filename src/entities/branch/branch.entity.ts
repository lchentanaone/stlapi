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
import { User } from '../user/user.entity';
import { Journal } from '../journal/journal.entity';


@Entity({ name: 'branch' })
export class Branch extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToMany(() => Attendant, (attendant) => attendant.branch, { onDelete: 'CASCADE' })
  @JoinTable()
  attendant: Attendant[];

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => User, (user) => user.branch, { onDelete: 'CASCADE' })
  user: User[];

  @ManyToMany(() => Journal, (journal) => journal.branch, { onDelete: 'CASCADE' })
  journal: Journal[];
}
