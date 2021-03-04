import {Kitchen} from './kitchen';
import {Sala} from './sala';

export interface Casa {
  donoCasa: string [];
  cozinha: Kitchen [];
  salaDeEstar: Sala;
}
