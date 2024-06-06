import { describe, expect, test, beforeAll } from "@jest/globals";
import { MaindisComponent } from "./maindis.component";
import { bootstrap } from "@gsilber/webez";

describe("MaindisComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<MaindisComponent>(MaindisComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(MaindisComponent);
        });
    });
});
