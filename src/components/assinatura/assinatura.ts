import Component from 'decorators/component';
import { Assinatura } from 'interfaces/assinatura';

@Component({
  selector: 'assinaturas-component',
  templateUrl: 'assinatura/assinatura.html',
  style: 'assinatura/assinatura.scss',
  folder: 'components'
})
export class AssinaturaComponent extends HTMLElement {
  props = {};
  constructor(public assinatura: Assinatura) {
    super();
    console.log(assinatura);
    this.props = assinatura;
    this.render();
  }

  getProps() {
   return this.props;
  }

  componentWillMount() {
  }
  componentDidMount() {
  }

  render() {
  }
}
