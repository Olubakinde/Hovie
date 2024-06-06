import { describe, expect, test, beforeAll } from "@jest/globals";
import { HomeDisComponent } from "./Home-Dis.component";
import { bootstrap } from "@gsilber/webez";

describe("HomeDisComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<HomeDisComponent>(HomeDisComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(HomeDisComponent);
        });
    });
});
