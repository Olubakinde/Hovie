import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie8Component } from "./movie8.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie8Component>(Movie8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie8Component);
        });
    });
});
