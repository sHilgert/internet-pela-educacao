import Component from 'decorators/component';
import { getAssinaturas, getTotalAssinaturas } from 'services/firebase';

@Component({
  selector: 'assinaturas-form-section',
  templateUrl: 'landing-page/sections/assinaturas-form-section/assinaturas-form-section.html',
  style: 'landing-page/sections/assinaturas-form-section/assinaturas-form-section.scss',
})
export class AssinaturasFormSection extends HTMLElement {
  constructor() {
    super();
  }

  componentWillMount() {
  }
}
