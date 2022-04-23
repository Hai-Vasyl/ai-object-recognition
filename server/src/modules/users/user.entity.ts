import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { GenderEnum } from '@/modules/users/enums/gender.enum';
import { Base } from '@/shared/entities/base.entity';
import { RoleEnum } from '@/modules/users/enums/role.enum';
import { Upload } from '@/modules/uploads/upload.entity';
import { Output } from '@/modules/outputs/output.entity';
import { Input } from '@/modules/inputs/input.entity';

@Entity('user')
export class User extends Base {
  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: GenderEnum, nullable: true })
  gender: GenderEnum;

  @Column({ type: 'enum', enum: RoleEnum, default: RoleEnum.USER })
  role: RoleEnum;

  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  @Column({ type: 'varchar' })
  color: string;

  @ManyToOne(() => Upload, (upload) => upload.uploadUsers)
  avatar: Upload;

  @OneToMany(() => Upload, (upload) => upload.creator)
  userUploads: Upload[];

  @OneToMany(() => Output, (output) => output.creator)
  userOutputs: Output[];

  @OneToMany(() => Input, (input) => input.creator)
  userInputs: Input[];
}
