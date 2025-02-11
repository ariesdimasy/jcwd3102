import { PrismaClient } from "@prisma/client"
import prisma from "./client"
import { mockDeep, mockReset, DeepMockProxy } from "jest-mock-extended"

jest.mock('./client',() => ({
        __esModule:true,
        default: mockDeep<PrismaClient>()
}))

beforeEach(() => {
    mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>

