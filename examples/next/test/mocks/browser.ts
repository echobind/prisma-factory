import { setupWorker } from 'msw'
import { handlers } from 'test/mocks/handlers'

export const worker = setupWorker(...handlers)
