import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie9Component } from "./movie9.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie9Component>(Movie9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie9Component);
        });
    });
});
