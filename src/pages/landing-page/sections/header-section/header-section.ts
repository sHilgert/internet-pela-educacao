import Component from 'decorators/component';

@Component({
  selector: 'header-section',
  templateUrl: 'landing-page/sections/header-section/header-section.html',
  style: 'landing-page/sections/header-section/header-section.scss',
})
export class HeaderSection extends HTMLElement {
  constructor() {
    super();
  }
}
