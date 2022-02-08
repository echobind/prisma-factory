export const initializeMocks = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('test/mocks/server')
    server.listen()
  } else {
    const { worker } = await import('test/mocks/browser')
    worker.start()
  }
}
