import request from "supertest";
import app from "../app";
import nock from "nock"

describe("GET /api/pokemons",  () => {
    it("it should be return an array of pokemon" ,async () => {

        const mockResponse = {
            results: [
                {
                    "name": "bulbasaur",
                    "url": "https://pokeapi.co/api/v2/pokemon/1/"
                },
                {
                    "name": "ivysaur",
                    "url": "https://pokeapi.co/api/v2/pokemon/2/"
                }
            ]
        }

        nock("https://pokeapi.co").get("/api/v2/pokemon").reply(200, mockResponse.results )
        const response = await request(app).get("/api/pokemons")

        expect(response.status).toBe(200)
        expect(response.body).toEqual(mockResponse.results)
    })
})