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
    date: Date;

    @Column()
    type: string;

    @Column()
    status: string;

    @Column()
    amount: number;

    @ManyToMany(() => User, (user) => user.expenses, { onDelete: 'CASCADE' })
    @JoinTable()
    user: User[];

    @CreateDateColumn()
    createdAt: Date;
  }