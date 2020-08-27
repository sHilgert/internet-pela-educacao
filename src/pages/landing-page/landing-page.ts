import Component from 'decorators/component';
import { DepoimentoSection } from './sections/depoimentos-section/depoimentos-section';
import { AssinaturasSection } from './sections/assinaturas-section/assinaturas-section';
import { HeaderSection } from './sections/header-section/header-section';
import { DescriptionSection } from './sections/description-section/description-section';

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page/landing-page.html',
  style: 'landing-page/landing-page.scss',
})
export class LandingPage extends HTMLElement {
  constructor() {
    super();

    new DescriptionSection();
    new HeaderSection();
    new DepoimentoSection();
    new AssinaturasSection();
  }
}
