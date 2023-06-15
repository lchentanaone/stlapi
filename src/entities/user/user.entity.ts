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
  
  @Entity({ name: 'user' })
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    // @Column()
    // branch_code: string;
    
    // @Column()
    // attendant_id: string;

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


    // @ManyToMany(() => Attendant, (attendant) => attendant.user)
    // attendant: Attendant[];

    // @ManyToMany(() => Branch, (branch) => branch.user)
    // branch: Branch[];
  }
  