import Component from 'decorators/component';

@Component({
  selector: 'description-section',
  templateUrl: 'landing-page/sections/description-section/description-section.html',
  style: 'landing-page/sections/description-section/description-section.scss',
})
export class DescriptionSection extends HTMLElement {
  constructor() {
    super();
  }
}
