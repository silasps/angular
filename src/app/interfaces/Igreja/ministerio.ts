import {Membro} from './membro';

export interface Ministerio {
  nome: string [];
  lider: Membro [];
  dataInicio: string;
  membros: Membro [];
//  a lógica que eu utilizei para utilizar [] foi  que sempre que eu tenho uma variável onde vai entrar
//  mais de um valor ao mesmo tempo.
}
