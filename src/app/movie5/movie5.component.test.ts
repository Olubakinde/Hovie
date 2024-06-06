import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie5Component } from "./movie5.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie5Component>(Movie5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie5Component);
        });
    });
});
