import {Membro} from './membro';
import {Pastor} from './pastor';
import {Ministerio} from './ministerio';
import {Secretaria} from './secretaria';

export interface Igreja {
  ministerio: Ministerio [];
  pastor: Pastor [];
  membro: Membro [];
  secretaria: Secretaria [];
}
