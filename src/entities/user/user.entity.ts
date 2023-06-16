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
  

  @Entity({ name: 'user' })
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToMany(() => Branch, (branch) => branch.user)
    // branch: Branch[];

    @ManyToMany(() => Attendant, (attendant) => attendant.user)
    @JoinTable()
    attendant: Attendant[];

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
  