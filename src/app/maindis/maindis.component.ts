import {
    BindDisabledToBoolean,
    Click,
    EventSubject,
    EzComponent,
    Input,
    ValueEvent,
} from "@gsilber/webez";
import html from "./maindis.component.html";
import css from "./maindis.component.css";

export class MaindisComponent extends EzComponent {
    @BindDisabledToBoolean("enter")
    protected button: boolean = true;
    nameEvent: EventSubject<string> = new EventSubject<string>();
    signEvent: EventSubject<string> = new EventSubject<string>();

    private usernameValue: string = "";
    private passwordValue: string = "";

    constructor() {
        super(html, css);
    }

    @Click("enter")
    enter() {
        this.signEvent.next("");
        this.nameEvent.next(this.usernameValue);
    }

    @Input("username")
    username(e: ValueEvent) {
        this.usernameValue = e.value;
        this.updateButtonState();
    }

    @Input("password")
    password(e: ValueEvent) {
        this.passwordValue = e.value;
        this.updateButtonState();
    }

    private updateButtonState() {
        this.button = !(
            this.usernameValue.length >= 1 && this.passwordValue.length >= 6
        );
    }
}
