import Component from 'decorators/component';
import { AssinaturaComponent } from 'components/assinatura/assinatura';
import { getAssinaturas, getTotalAssinaturas } from 'services/firebase';

@Component({
  selector: 'assinaturas-section',
  templateUrl: 'landing-page/sections/assinaturas-section/assinaturas-section.html',
  style: 'landing-page/sections/assinaturas-section/assinaturas-section.scss',
})
export class AssinaturasSection extends HTMLElement {
  assinaturas = []
  constructor() {
    super();
  }

  componentWillMount() {
    this.startObserverAssinaturas();
  }

  getTotalAssinaturas() {
    getTotalAssinaturas()
      .then((total: Number) => {
        this.getElementsByClassName('assinaturas__total__number')[0].textContent = total.toString();
      });
  }

  startObserverAssinaturas() {
    getAssinaturas()
      .on('value', (snapshot: any) => {
        this.getTotalAssinaturas();
        this.assinaturas = snapshot.val();
        this.getElementsByClassName('assinaturas__assinadores__lista-item')[0].innerHTML = '';
        Object.keys(this.assinaturas).forEach((key: any) => {
          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            this.assinaturas[key]
          );
        });
      });
  };
}
