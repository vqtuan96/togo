import { Column, Entity } from 'typeorm';
import { TodoBase } from './todoBase.entity';

@Entity()
export class User extends TodoBase {
  constructor(parital: Partial<User>) {
    super();
    Object.assign(this, parital);
  }
  @Column({ type: 'varchar', length: 60, nullable: true })
  name: string;

  @Column({ type: 'int', default: 0, nullable: true })
  dailyMaxTasks: number;
}
