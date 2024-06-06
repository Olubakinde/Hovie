import { EzComponent } from "@gsilber/webez";
import html from "./movie.component.html";
import css from "./movie.component.css";

export class MovieComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
}
