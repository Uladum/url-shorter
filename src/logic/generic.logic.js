export const generic = async () => {
  try {
    return { status: 200, data: { name: 'Miguel' } }
  } catch (err) {
    return { status: 500, data: { msg: 'generic() error', error: err } }
  }
}
