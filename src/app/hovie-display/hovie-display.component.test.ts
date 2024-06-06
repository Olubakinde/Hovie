import { describe, expect, test, beforeAll } from "@jest/globals";
import { HovieDisplayComponent } from "./hovie-display.component";
import { bootstrap } from "@gsilber/webez";

describe("HovieDisplayComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<HovieDisplayComponent>(HovieDisplayComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(HovieDisplayComponent);
        });
    });
});
