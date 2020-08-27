import Component from 'decorators/component';
import { DepoimentoComponent } from 'components/depoimento/depoimento';
import { getDepoimentos } from 'services/firebase';

@Component({
  selector: 'depoimentos-section',
  templateUrl: 'landing-page/sections/depoimentos-section/depoimentos-section.html',
  style: 'landing-page/sections/depoimentos-section/depoimentos-section.scss',
})
export class DepoimentoSection extends HTMLElement {
  depoimentos = []
  constructor() {
    super();
  }

  componentWillMount() {
    getDepoimentos()
      .then((value: any) => {
        this.depoimentos = value;
        this.depoimentos.forEach((depoimento) => {
          depoimento['nome'] = depoimento['usuario']['nome'];
          this.getElementsByClassName('section__depoimentos')[0].appendChild(new DepoimentoComponent(depoimento))
        });
      });
  }
}
