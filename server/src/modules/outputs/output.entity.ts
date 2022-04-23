import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { Base } from '@/shared/entities/base.entity';
import { User } from '@/modules/users/user.entity';
import { Upload } from '@/modules/uploads/upload.entity';
import { Input } from '@/modules/inputs/input.entity';

@Entity('output')
export class Output extends Base {
  @Column({ type: 'varchar' })
  value: string;

  @Column({ type: 'varchar' })
  preview: string;

  @OneToMany(() => Input, (input) => input.output)
  inputs: Input[];

  @ManyToOne(() => User, (user) => user.userOutputs)
  creator: User;

  @OneToMany(() => Upload, (upload) => upload.output)
  outputUploads: Upload[];
}
