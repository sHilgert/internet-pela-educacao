import Component from 'decorators/component';
import { AssinaturaComponent } from 'components/assinatura/assinatura';
import { getAssinaturas } from 'services/firebase';

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

  startObserverAssinaturas() {
    getAssinaturas()
      .on('value', (snapshot: any) => {
        this.assinaturas = snapshot.val();
        debugger;
        this.assinaturas.forEach((assinatura) => {
          this.getElementsByClassName('section--assinaturas')[0].appendChild(new AssinaturaComponent(assinatura))
        });
      });
  };
}
