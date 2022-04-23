import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { Timestamp } from '@/shared/entities/timestamp.entity';
import { User } from '@/modules/users/user.entity';
import { AccessTypeEnum } from '@/shared/enums/access-type.enum';
import { ObjectTypeEnum } from '@/shared/enums/object-type.enum';
import { Input } from '@/modules/inputs/input.entity';
import { Output } from '@/modules/outputs/output.entity';

@Entity('upload')
export class Upload extends Timestamp {
  @PrimaryColumn({ type: 'varchar', unique: true })
  url: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  mimetype: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: AccessTypeEnum,
    default: AccessTypeEnum.PUBLIC,
  })
  accessType: AccessTypeEnum;

  @Column({
    type: 'enum',
    enum: ObjectTypeEnum,
    default: ObjectTypeEnum.UNSEALED,
  })
  objectType: ObjectTypeEnum;

  @ManyToOne(() => User, (user) => user.userUploads)
  creator: User;

  @OneToOne(() => Input, (input) => input.upload)
  input: Input;

  @ManyToOne(() => Output, (output) => output.outputUploads)
  output: Output;

  @OneToMany(() => User, (user) => user.avatar)
  uploadUsers: User[];
}
