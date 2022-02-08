import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../users/entities/User";

@Entity("coordinates")
export class Coordinates {
  @PrimaryColumn()
  id?: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  @Column()
  description: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, (user) => user.coordinates)
  @JoinColumn({ name: "user_id" })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
