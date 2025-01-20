import { prismaMock } from "../setup_test/singleton";
import { getUsers } from "../setup_test/function";

test("should return an array of users ",async () => {
    prismaMock.user.findMany.mockResolvedValue([
        {
            id:1,
            firstName:"john",
            lastName:"doe",
            email:"john.doe@gmail.com",
            createdAt:new Date(),
            updatedAt:new Date()
        },
        {
            id:2,
            firstName:"jane",
            lastName:"dine",
            email:"jane.dine@gmail.com",
            createdAt:new Date(),
            updatedAt:new Date()
        }
    ])

    await expect(getUsers()).resolves.toEqual([
        {
            id:1,
            firstName:"john",
            lastName:"doe",
            email:"john.doe@gmail.com",
            createdAt:new Date(),
            updatedAt:new Date()
        },
        {
            id:2,
            firstName:"jane",
            lastName:"dine",
            email:"jane.dine@gmail.com",
            createdAt:new Date(),
            updatedAt:new Date()

        }
    ])
})