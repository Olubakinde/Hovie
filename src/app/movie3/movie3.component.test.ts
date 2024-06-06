import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie3Component } from "./movie3.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie3Component>(Movie3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie3Component);
        });
    });
});
