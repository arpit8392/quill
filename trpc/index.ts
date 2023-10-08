import prisma from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { TRPCError } from '@trpc/server'
import { publicProcedure, router } from './trpc'

export const appRouter = router({
	authCallback: publicProcedure.query(async () => {
		const { getUser } = getKindeServerSession()
		const user = getUser()

		if (!user.id || !user.email) {
			throw new TRPCError({ code: 'UNAUTHORIZED' })
		}

		const existingUser = await prisma.user.findFirst({
			where: {
				id: user.id,
			},
		})

		if (!existingUser) {
			await prisma.user.create({
				data: {
					id: user.id,
					email: user.email,
				},
			})
		}

		return { success: true }
	}),
})

export type AppRouter = typeof appRouter
