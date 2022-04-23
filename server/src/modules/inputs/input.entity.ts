import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { Base } from '@/shared/entities/base.entity';
import { User } from '@/modules/users/user.entity';
import { Upload } from '@/modules/uploads/upload.entity';
import { Output } from '@/modules/outputs/output.entity';

@Entity('input')
export class Input extends Base {
  @Column({ type: 'text' })
  values: string;

  @ManyToOne(() => User, (user) => user.userInputs)
  creator: User;

  @ManyToOne(() => Output, (output) => output.inputs)
  output: Output;

  @OneToOne(() => Upload, (upload) => upload.input)
  @JoinColumn()
  upload: Upload;
}
