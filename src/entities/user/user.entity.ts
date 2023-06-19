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
import { Attendant } from '../attendant/attendant.entity';
import { Branch } from '../branch/branch.entity';
import { Bets } from '../bets/bets.entity';
import { Expenses } from '../expenses/expenses.entity';
import { Tapada } from '../tapada/tapada.entity';


  @Entity({ name: 'user' })
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Branch, (branch) => branch.user, { onDelete: 'CASCADE' })
    @JoinTable()
    branch: Branch[];

    @ManyToMany(() => Attendant, (attendant) => attendant.user, { onDelete: 'CASCADE' })
    @JoinTable()
    attendant: Attendant[];

    @ManyToMany(() => Bets, (bets) => bets.user, { onDelete: 'CASCADE' })
    bets: Bets[];

    @ManyToMany(() => Expenses, (expenses) => expenses.user, { onDelete: 'CASCADE' })
    expenses: Expenses[];

    @ManyToMany(() => Tapada, (tapada) => tapada.user, { onDelete: 'CASCADE' })
    tapada: Tapada [];

    @Column()
    username: string;
  
    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    middle_name: string;

    @Column()
    last_name: string;

    @Column()
    position: string;

    @Column()
    daily_rental: number;

    @Column()
    status: string;

    @CreateDateColumn()
    createdAt: Date;


  }
  