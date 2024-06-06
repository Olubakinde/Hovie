import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie7Component } from "./movie7.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie7Component>(Movie7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie7Component);
        });
    });
});
