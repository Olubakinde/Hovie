import { describe, expect, test, beforeAll } from "@jest/globals";
import { MovieComponent } from "./movie.component";
import { bootstrap } from "@gsilber/webez";

describe("MovieComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<MovieComponent>(MovieComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(MovieComponent);
        });
    });
});
