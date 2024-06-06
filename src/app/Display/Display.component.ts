import { EzComponent } from "@gsilber/webez";
import html from "./Display.component.html";
import css from "./Display.component.css";
import { HomeDisComponent } from "../Home-Dis/Home-Dis.component";
import { MaindisComponent } from "../maindis/maindis.component";
import { HovieDisplayComponent } from "../hovie-display/hovie-display.component";

export class DisplayComponent extends EzComponent {
    protected home: HomeDisComponent = new HomeDisComponent();
    protected maindis: MaindisComponent = new MaindisComponent();
    protected Dis: HovieDisplayComponent = new HovieDisplayComponent();

    constructor() {
        super(html, css);
        this.addComponent(this.home, "home");

        // Remove the home component after 5 seconds
        setTimeout(() => {
            this.removeComponent(this.home);
        }, 5000);
        this.addComponent(this.maindis, "dishome");

        this.maindis.signEvent.subscribe((id: string) => {
            if (id === "") {
                this.removeComponent(this.home);
                this.removeComponent(this.maindis);
            }
            this.addComponent(this.Dis, "hovdis");
        });
    }
}
