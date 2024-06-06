import { describe, expect, test, beforeAll } from "@jest/globals";
import { Movie6Component } from "./movie6.component";
import { bootstrap } from "@gsilber/webez";

describe("Movie6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Movie6Component>(Movie6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Movie6Component);
        });
    });
});
