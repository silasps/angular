import {Membro} from './membro';
import {Pastor} from './pastor';

export interface Igreja {
  ministerio: string [];
  pastor: Pastor [];
  membro: Membro [];
  secretaria: string [];
}
