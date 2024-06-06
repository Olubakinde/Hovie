import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie4Component } from "./movie4.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie4Component>(Movie4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie4Component);
        });
    });
});
