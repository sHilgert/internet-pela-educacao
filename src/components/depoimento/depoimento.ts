import Component from 'decorators/component';
import { Depoimento } from 'interfaces/depoimento';

@Component({
  selector: 'depoimento-component',
  templateUrl: 'depoimento/depoimento.html',
  style: 'depoimento/depoimento.scss',
  folder: 'components'
})
export class DepoimentoComponent extends HTMLElement {
  depoimentos = []
  props = {};
  constructor(public depoimento: Depoimento) {
    super();
    this.props = depoimento;
  }

  componentDidMount() {}
}
