import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie10Component } from "./movie10.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie10Component>(Movie10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie10Component);
        });
    });
});
