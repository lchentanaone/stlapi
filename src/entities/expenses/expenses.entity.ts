import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
  } from 'typeorm';
  import { User } from '../user/user.entity';

  
@Entity({ name: 'expenses' })
  export class Expenses extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    date: string;

    @Column()
    amount: number;

    @Column()
    type: string;

    @ManyToMany(() => User, (user) => user.expenses, { onDelete: 'CASCADE' })
    @JoinTable()
    user: User[];
  }