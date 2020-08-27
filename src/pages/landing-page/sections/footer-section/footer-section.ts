import Component from 'decorators/component';

@Component({
  selector: 'footer-section',
  templateUrl: 'landing-page/sections/footer-section/footer-section.html',
  style: 'landing-page/sections/footer-section/footer-section.scss'
})
export class FooterSection extends HTMLElement {
  constructor() {
    super();
  }
}
