import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie2Component } from "./movie2.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie2Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie2Component>(Movie2Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie2Component);
        });
    });
});
