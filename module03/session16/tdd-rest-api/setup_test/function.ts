import prisma from "./client"

export async function getUsers(){
    return await prisma.user.findMany()
}