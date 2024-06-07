import { Click, EzComponent } from "@gsilber/webez";
import html from "./hovie-display.component.html";
import css from "./hovie-display.component.css";
import { MovieComponent } from "../movie/movie.component";
import { Movie2Component } from "../movie2/movie2.component";
import { Movie3Component } from "../movie3/movie3.component";
import { Movie4Component } from "../movie4/movie4.component";
import { Movie5Component } from "../movie5/movie5.component";
import { Movie6Component } from "../movie6/movie6.component";
import { Movie7Component } from "../movie7/movie7.component";
import { Movie8Component } from "../movie8/movie8.component";
import { Movie9Component } from "../movie9/movie9.component";
import { Movie10Component } from "../movie10/movie10.component";
import { MaindisComponent } from "../maindis/maindis.component";
import { HomeDisComponent } from "../Home-Dis/Home-Dis.component";

export class HovieDisplayComponent extends EzComponent {
    protected dis: MaindisComponent = new MaindisComponent();
    protected movv1: MovieComponent = new MovieComponent();
    protected movv2: Movie2Component = new Movie2Component();
    protected movv3: Movie3Component = new Movie3Component();
    protected movv4: Movie4Component = new Movie4Component();
    protected movv5: Movie5Component = new Movie5Component();
    protected movv6: Movie6Component = new Movie6Component();
    protected movv7: Movie7Component = new Movie7Component();
    protected movv8: Movie8Component = new Movie8Component();
    protected movv9: Movie9Component = new Movie9Component();
    protected movv10: Movie10Component = new Movie10Component();
    protected homdis: HomeDisComponent = new HomeDisComponent();

    constructor() {
        super(html, css);
        this.addComponent(this.homdis, "main");
    }

    @Click("mov1")
    mov1() {
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv4);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv1, "main");
    }

    @Click("mov2")
    mov2() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv4);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv2, "main");
    }

    @Click("mov3")
    mov3() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv4);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv3, "main");
    }

    @Click("mov4")
    mov4() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv4, "main");
    }

    @Click("mov5")
    mov5() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv4);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv5, "main");
    }

    @Click("mov6")
    mov6() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv4);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv6, "main");
    }

    @Click("mov7")
    mov7() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv4);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv7, "main");
    }

    @Click("mov8")
    mov8() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv4);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv8, "main");
    }

    @Click("mov9")
    mov9() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv4);
        this.removeComponent(this.movv10);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv9, "main");
    }

    @Click("mov10")
    mov10() {
        this.removeComponent(this.movv1);
        this.removeComponent(this.movv2);
        this.removeComponent(this.movv3);
        this.removeComponent(this.movv5);
        this.removeComponent(this.movv6);
        this.removeComponent(this.movv7);
        this.removeComponent(this.movv8);
        this.removeComponent(this.movv9);
        this.removeComponent(this.movv4);
        this.removeComponent(this.homdis);
        this.addComponent(this.movv10, "main");
    }
}
